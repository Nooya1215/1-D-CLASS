import React from 'react';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/category.css";

const categories = [
  { key: 'pet', ko: '반려동물' },
  { key: 'beauty', ko: '뷰티' },
  { key: 'sports', ko: '스포츠' },
  { key: 'cooking', ko: '쿠킹' },
  { key: 'all', ko: '전체' },
];

const CateBtn = () => {
  const { t, currentLang, navigateWithLang } = useLanguage();

  const handleClick = (categoryKey, categoryKo) => {
    // 모든 버튼이 /products/:category 구조로 이동
    const urlCategory = currentLang === 'en' ? categoryKey : categoryKo;
    navigateWithLang(`/products/${encodeURIComponent(urlCategory)}`);
  };

  return (
    <section id="category">
      <div className="wrap">
        {categories.map(({ key, ko }) => (
          <button key={key} onClick={() => handleClick(key, ko)}>
            {t(`categories.${key}`)}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CateBtn;
