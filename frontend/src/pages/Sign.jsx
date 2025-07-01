import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/Sign.css";

export default function Sign() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { t, currentLang, toggleLanguage } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const userid = e.target.userid.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, userid, password }),
      });

      const text = await res.text();
      alert(text);

      if (res.ok) {
        alert('회원가입 성공!');
        navigate('/');
      }
    } catch (error) {
      alert('서버와 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <section id="sign">
      <div className="wrap">
        <h2 className="h2">{t('signTitle')}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t('emailPlaceholder')}
            required
          />
          <input
            type="text"
            name="userid"
            id="userid"
            placeholder={t('useridPlaceholder')}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder={t('passwordPlaceholder')}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder={t('confirmPasswordPlaceholder')}
            required
          />
          <button type="submit">{t('signUpButton')}</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="p">
          {t('alreadyMemberQuestion')}&nbsp;
          <Link to={`/${currentLang}/login`}>{t('loginLink')}</Link>
        </p>
      </div>
    </section>
  );
}
