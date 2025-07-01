import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/Mypage.css";

export default function MyPage() {
  const navigate = useNavigate();
  const { t, currentLang } = useLanguage();

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState('');

  // 내 정보 조회
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/user/profile', {
          credentials: 'include',
        });
        if (!res.ok) {
          throw new Error('Unauthorized');
        }
        const data = await res.json();
        setUserInfo(data);
      } catch (err) {
        setError('로그인이 필요합니다. Please log in.');
      }
    };

    fetchProfile();
  }, []);

  const handleGoHome = () => {
    navigate(`/${currentLang}`);
  };

  return (
    <section id="mypage">
      <div className="wrap">
        <h2>{t('mypageTitle') || 'My Page (Temporary)'}</h2>
        {error && <p className="error">{error}</p>}
        {userInfo ? (
          <>
            <p>
              ID: {userInfo.userid}
            </p>
            <p>
              E-mail: {userInfo.email}
            </p>
          </>
        ) : (
          !error && <p>{t('loading') || 'Loading...'}</p>
        )}
      </div>
    </section>
  );
}
