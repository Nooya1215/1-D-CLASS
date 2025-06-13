import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/Login.css";

export default function Login() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const useridOrEmail = e.target.useridOrEmail.value.trim();
    const password = e.target.password.value;

    if (!useridOrEmail || !password) {
      setMessage('아이디(또는 이메일)와 비밀번호를 모두 입력해주세요.');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ useridOrEmail, password }),
      });

      const text = await res.text();
      setMessage(text);

      if (res.ok) {
        alert('로그인 성공!');
        navigate('/');
      }
    } catch (error) {
      setMessage('서버와 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <section id="login">
      <div className="wrap">
        <h2 className="h2">
          로그인하고 나에게 딱 맞는
          <br />
          클래스를 만나보세요
        </h2>
        <form onSubmit={handleSubmit}>
          {/* <input type="text" name="email" id="email" placeholder="이메일(아이디)" /> */}
          <input type="text" name="useridOrEmail" id="useridOrEmail" placeholder="아이디 또는 이메일" />
          <input type="password" name="password" id="password" placeholder="비밀번호" />
          <Link to="">이메일/비밀번호 찾기</Link>
          <button type="submit">로그인</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="p">
          아직 회원이 아니신가요?&nbsp;<Link to="/sign">회원가입</Link>
        </p>
      </div>
    </section>
  );
}
