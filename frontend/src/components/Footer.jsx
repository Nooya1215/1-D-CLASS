import React from 'react';
import { Link } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/footer.css";

export default function Footer() {
  const { t, currentLang, toggleLanguage } = useLanguage();

  return (
    <footer id="footer">
      <div className="wrap">
        <div className='footer-logo'>
          <div>
            <h2 className="h2">{t('title')}</h2>
            <p className="p">{t('footertitle')}</p>
          </div>
        </div>
        <div className='footer-info'>
          <ul>
            <li>
              <a href="https://github.com/Nooya1215/1-D-CLASS" target="_blank" rel="noopener noreferrer">깃허브</a>
            </li>
            <li>
              <a href="">노션</a>
            </li>
            <li>
              <a href="">피그마</a>
            </li>
          </ul>
          <p className="p">
            ⓒ 2025 Team Studio 3 <br />
            Designed & Developed by 경유라, 김선우, 양해지
          </p>
        </div>
        <div className='footer-faq'>
          <div>
            <h3 className="h3">{t('footerhelp')}</h3>
            <Link to={`/${currentLang}/faq`}>{t('faqinquiry')}</Link>
            <p className='p'>{t('footertime')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
