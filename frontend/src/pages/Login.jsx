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
      alert(t('alert.fillAllFields'));
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

      if (data.success) {
        alert(t('alert.loginSuccess'));
        window.dispatchEvent(new Event('loginStatusChanged'));
        navigate(`/${currentLang}`);
      } else {
        // 서버에서 보내준 code를 받아서 메시지 출력
        alert(t(`alert.${data.code}`));
      }
    } catch {
      alert(t('alert.serverError'));
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
