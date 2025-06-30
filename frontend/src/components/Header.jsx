import React from 'react';
import { Link } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/header.css";

export default function Header() {
  const { t, currentLang, toggleLanguage } = useLanguage();

  return (
    <header>
      <div className='wrap'>
        <Link to={`/${currentLang}`}>
          <h1 className="h1">{t('title')}</h1>
        </Link>
        <form method="get" action="/search">
          <input type="search" name="search" id="search" />
          <button type="submit"></button>
        </form>
        <ul className='gnb'>
          <li><Link to={`/${currentLang}/wishlist`}>{t('wishlist')}</Link></li>
          <li><Link to={`/${currentLang}/login`}>{t('login') || '로그인'}</Link></li>
          <li>
            <button onClick={toggleLanguage}>
              {currentLang === 'ko' ? 'English' : '한국어'}
            </button>
          </li>
          <li>
            <button>{t('darkMode')}</button>
          </li>
          <li>
            <button>{t('menu')}</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
