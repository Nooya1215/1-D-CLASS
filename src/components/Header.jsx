import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/header.css";
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

export default function Header() {
  const { t, currentLang, toggleLanguage } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const checkLoginStatus = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/auth/check', {
        credentials: 'include',
      });
      setIsLoggedIn(res.ok);
    } catch {
      setIsLoggedIn(false);
    }
  };

  const handleSearchSubmit = (query) => {

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      navigate(`/search-mobile?search=${encodeURIComponent(query)}`);
    } else {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };  

  useEffect(() => {
    checkLoginStatus();
    window.addEventListener('loginStatusChanged', checkLoginStatus);
    return () => window.removeEventListener('loginStatusChanged', checkLoginStatus);
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        alert('로그아웃 되었습니다.');
        setIsLoggedIn(false);
        window.dispatchEvent(new Event('loginStatusChanged'));
        navigate(`/${currentLang}/`);
      } else {
        alert('로그아웃에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  return (
    <header>
      <div className='wrap'>
        <Link to={`/${currentLang}`}>
          <h1 className="h1">{t('title')}</h1>
        </Link>
        <SearchBar onSearch={handleSearchSubmit} />
        <ul className='gnb'>
          <li><Link to={`/${currentLang}/wishlist`}>{t('wishlist')}</Link></li>
          <li>
            {isLoggedIn
              ? <Link to={`/${currentLang}/mypage`}>{t('mypage')}</Link>
              : <Link to={`/${currentLang}/login`}>{t('login')}</Link>
            }
          </li>
            {isLoggedIn && (
              <li>
                <button className='logout' onClick={handleLogout}>{t('logout')}</button>
              </li>
            )}
          <li>
            <button className='lang' onClick={toggleLanguage}>
              {currentLang === 'ko' ? 'English' : '한국어'}
            </button>
          </li>
          <li>
            <button className='dark'>{t('darkMode')}</button>
          </li>
          <li>
            <a className="menu-btn" onClick={() => {
              if (window.innerWidth <= 768) setMenuOpen(true);
            }}>
              {t('menu')}
            </a>
          </li>
        </ul>
      </div>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
