import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/Login.css";

export default function Login() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { t, currentLang } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const useridOrEmail = e.target.useridOrEmail.value.trim();
    const password = e.target.password.value;

    if (!useridOrEmail || !password) {
      alert('아이디(또는 이메일)와 비밀번호를 모두 입력해주세요.');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ useridOrEmail, password }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        alert('로그인 되었습니다.');
        window.dispatchEvent(new Event('loginStatusChanged'));
        navigate(`/${currentLang}`);
      }
    } catch {
      setMessage('서버와 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <section id="login">
      <div className="wrap">
        <h2 dangerouslySetInnerHTML={{ __html: t('logintitle') }} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="useridOrEmail"
            id="useridOrEmail"
            placeholder={t('emailOrIdPlaceholder')}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder={t('passwordPlaceholder')}
          />
          <Link to="">{t('forgotLink')}</Link>
          <button type="submit">{t('loginButton')}</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="p">
          {t('notMemberQuestion')}&nbsp;
          <Link to={`/${currentLang}/sign`}>{t('signupLink')}</Link>
        </p>
      </div>
    </section>
  );
}
