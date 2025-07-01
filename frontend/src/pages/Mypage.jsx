import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/Mypage.css";

export default function MyPage() {
  const navigate = useNavigate();
  const { t, currentLang } = useLanguage();

  const handleGoHome = () => {
    navigate(`/${currentLang}`);
  };

  return (
    <section id="mypage">
      <div className="wrap">
        <h2>{t('mypageTitle') || '마이페이지 (임시)'}</h2>
        <p>{t('welcomeMessage') || '로그인한 사용자만 볼 수 있는 임시 마이페이지입니다.'}</p>
        
        <button onClick={handleGoHome}>
          {t('goHome') || '홈으로 이동'}
        </button>
      </div>
    </section>
  );
}
