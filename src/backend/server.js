import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import bcrypt from 'bcrypt';

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    // 기존 포트들 유지해도 무방
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('DB 연결 실패:', err);
    process.exit(1);
  }
  console.log('DB 연결 성공');
});

// 회원가입 라우터
app.post('/api/sign', async (req, res) => {
  const { userid, email, password } = req.body;

  if (!userid || !email || !password) {
    return res.status(400).send("모든 항목을 입력해주세요.");
  }

  const checkSql = `SELECT * FROM users WHERE userid = ?`;
  connection.query(checkSql, [userid], async (err, result) => {
    if (err) return res.status(500).send("DB 오류");

    if (result.length > 0) {
      return res.status(409).send("이미 사용 중인 아이디입니다.");
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertSql = `INSERT INTO users (userid, email, password) VALUES (?, ?, ?)`;
      connection.query(insertSql, [userid, email, hashedPassword], (err) => {
        if (err) return res.status(500).send("회원가입 실패");

        // 성공 시 텍스트 메시지 응답
        res.status(200).send("회원가입 성공!");
      });
    } catch {
      res.status(500).send("서버 오류");
    }
  });
});

// 로그인 라우터
app.post('/api/login', (req, res) => {
  const { useridOrEmail, password } = req.body;

  if (!useridOrEmail || !password) {
    return res.status(400).send('아이디(또는 이메일)와 비밀번호를 입력하세요.');
  }

  // 이메일인지 아이디인지 간단 판단
  const isEmail = useridOrEmail.includes('@');
  const sql = isEmail
    ? 'SELECT * FROM users WHERE email = ?'
    : 'SELECT * FROM users WHERE userid = ?';

  connection.query(sql, [useridOrEmail], async (err, results) => {
    if (err) return res.status(500).send('DB 오류');

    if (results.length === 0) {
      return res.status(401).send('가입되지 않은 아이디 또는 이메일입니다.');
    }

    const user = results[0];
    try {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return res.send('로그인 성공');
      } else {
        return res.status(401).send('비밀번호가 틀렸습니다.');
      }
    } catch {
      return res.status(500).send('서버 오류');
    }
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중 http://localhost:${PORT}`);
});
