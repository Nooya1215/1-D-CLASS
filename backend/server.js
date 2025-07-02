import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cookieParser());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
  ],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// 회원가입
app.post('/api/sign', async (req, res) => {
  const { userid, email, password } = req.body;
  if (!userid || !email || !password) {
    return res.status(400).json({ message: "모든 항목을 입력해주세요." });
  }

  connection.query(
    'SELECT * FROM users WHERE userid = ?',
    [userid],
    async (err, results) => {
      if (err) return res.status(500).json({ message: "DB 오류" });
      if (results.length > 0) return res.status(409).json({ message: "이미 사용 중인 아이디입니다." });

      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        connection.query(
          'INSERT INTO users (userid, email, password) VALUES (?, ?, ?)',
          [userid, email, hashedPassword],
          (err) => {
            if (err) return res.status(500).json({ message: "회원가입 실패" });
            res.json({ message: "회원가입 성공" });
          }
        );
      } catch {
        res.status(500).json({ message: "서버 오류" });
      }
    }
  );
});

// 로그인
app.post('/api/login', (req, res) => {
  const { useridOrEmail, password } = req.body;
  if (!useridOrEmail || !password) {
    return res.status(400).json({ success: false, code: 'fillAllFields' });
  }

  const sql = useridOrEmail.includes('@')
    ? 'SELECT * FROM users WHERE email = ?'
    : 'SELECT * FROM users WHERE userid = ?';

  connection.query(sql, [useridOrEmail], async (err, results) => {
    if (err) return res.status(500).json({ success: false, code: 'dbError' });
    if (results.length === 0) {
      return res.status(401).json({ success: false, code: 'userNotFound' });
    }

    const user = results[0];
    try {
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ success: false, code: 'wrongPassword' });

      const token = jwt.sign(
        { userid: user.userid, id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000,
        path: '/',
      });

      res.json({ success: true, code: 'loginSuccess' });
    } catch {
      res.status(500).json({ success: false, code: 'serverError' });
    }
  });
});


// 로그인 상태 확인
app.get('/api/auth/check', (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ loggedIn: false, message: '토큰이 없습니다.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ loggedIn: false, message: '유효하지 않은 토큰입니다.' });
    }
    res.json({ loggedIn: true, userid: decoded.userid, id: decoded.id });
  });
});

// 로그아웃
app.post('/api/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });
  res.json({ message: '로그아웃 성공' });
});

// profile
app.get('/api/user/profile', (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: '토큰이 없습니다.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
    }

    const sql = 'SELECT id, userid, email FROM users WHERE id = ?';
    connection.query(sql, [decoded.id], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'DB 오류' });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: '사용자 정보를 찾을 수 없습니다.' });
      }

      res.json(results[0]);
    });
  });
});


// 상품 리스트
app.get('/api/products', (req, res) => {
  // 상품 기본 정보 모두 가져오기
  const productSql = `
    SELECT
      id, mainImg,
      category_ko, category_en,
      name_ko, name_en,
      price, discount,
      day_ko, day_en,
      level_ko, level_en,
      person,
      duration_ko, duration_en,
      updatedAt,
      wishCount,
      reviewCount
    FROM products
  `;

  connection.query(productSql, (err, products) => {
    if (err) {
      console.error(err);
      return res.status(500).send("DB 오류");
    }

    if (products.length === 0) {
      return res.json([]);
    }

    // 상품 id 배열 추출
    const productIds = products.map(p => p.id);

    // 해당 상품들 태그 조회
    const tagSql = `
      SELECT product_id, tag_ko, tag_en
      FROM product_tags
      WHERE product_id IN (?)
    `;

    connection.query(tagSql, [productIds], (err2, tags) => {
      if (err2) {
        console.error(err2);
        return res.status(500).send("태그 조회 오류");
      }

      // 상품별 태그 묶기
      const tagsByProduct = {};
      tags.forEach(tag => {
        if (!tagsByProduct[tag.product_id]) {
          tagsByProduct[tag.product_id] = [];
        }
        tagsByProduct[tag.product_id].push({
          tag_ko: tag.tag_ko,
          tag_en: tag.tag_en
        });
      });

      // 상품에 태그 붙이기
      const productsWithTags = products.map(product => ({
        ...product,
        tag: tagsByProduct[product.id] || []
      }));

      res.json(productsWithTags);
    });
  });
});

// 찜
app.get('/api/products/best', (req, res) => {
  const sql = `
    SELECT 
      id, mainImg, category_ko, category_en, name_ko, name_en,
      price, discount, day_ko, day_en, level_ko, level_en,
      person, duration_ko, duration_en, updatedAt,
      wishCount, reviewCount
    FROM products
    ORDER BY wishCount DESC
    LIMIT 3
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('찜 많은 상품 조회 오류:', err);
      return res.status(500).json({ message: '서버 오류' });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중 http://localhost:${PORT}`);
});
