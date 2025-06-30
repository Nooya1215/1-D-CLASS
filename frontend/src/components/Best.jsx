import React, { useState, useEffect } from 'react';
import axios from 'axios';            // axios 임포트 추가
import CardBest from '../components/CardBest';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/best.css";

export default function Best() {
  const [bestProducts, setBestProducts] = useState([]);
  const { t, currentLang, toggleLanguage } = useLanguage();

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')  // 백엔드 API 호출
      .then(res => {
        const data = res.data;
        // wishCount 기준 내림차순 정렬 (숫자 변환 필수)
        const sorted = data.sort((a, b) => Number(b.wishCount) - Number(a.wishCount));
        setBestProducts(sorted.slice(0, 10));
      })
      .catch(err => {
        console.error('베스트 상품 로딩 실패:', err);
      });
  }, []);

  return (
    <section id="best">
      <div className="wrap">
        <h2 className="h2">{t('best')}</h2>
        <ul className='best-list'>
          {bestProducts.map((product, index) => (
            <CardBest key={product.id} product={product} rank={index + 1} />
          ))}         
        </ul>
      </div>
    </section>
  );
}
