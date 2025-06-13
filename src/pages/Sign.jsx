import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/Sign.css";

export default function Sign() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const userid = e.target.userid.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, userid, password }),
      });

      const text = await res.text();
      setMessage(text);

      if (res.ok) {
        alert('회원가입 성공!');
        navigate('/');
      }
    } catch (error) {
      setMessage('서버와 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <section id="sign">
      <div className="wrap">
        <h2 className="h2">회원가입 페이지</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" id="email" placeholder="이메일" required />
          <input type="text" name="userid" id="userid" placeholder="아이디" required />
          <input type="password" name="password" id="password" placeholder="비밀번호" required />
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="비밀번호 확인" required />
          <button type="submit">회원가입</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="p">
          이미 회원이신가요?&nbsp;<Link to="/login">로그인</Link>
        </p>
      </div>
    </section>
  );
}
