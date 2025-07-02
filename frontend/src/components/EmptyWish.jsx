import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';  // axios 추가
import CardWishBest from './CardWishBest';
import useLanguage from '../hooks/useLanguage'; // 경로는 네 폴더 구조에 맞게

export default function EmptyWish() {
  const [bestProducts, setBestProducts] = useState([]);
  const { t, currentLang, toggleLanguage } = useLanguage();

  useEffect(() => {
    axios.get('http://localhost:8080/api/products/best', { withCredentials: true })
      .then((res) => {
        setBestProducts(res.data);
      })
      .catch((err) => {
        console.error('찜 많은 클래스 로딩 실패:', err);
      });
  }, []);

  return (
    <div className="wrap emptyWish">
      <h2>{t('wishList.emptyMessage1')}</h2>
      <p className="logoImg">
        {t('wishList.emptyMessage2')}<br />
        <span>{t('wishList.emptyMessage2Span')}</span>
      </p>
      <div className="wishBest">
        <h3>{t('wishList.title')}</h3>
        <ul className="best3">
          {bestProducts.map((product, idx) => (
            <CardWishBest key={product.id} product={product} rank={idx + 1} />
          ))}
        </ul>
      </div>
      <Link to={`/${currentLang}/products/all`} className="btn">
        {t('wishList.browseBtn')}
      </Link>
    </div>
  );
}
