import React from 'react';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/category.css";

const categories = [
  { key: 'pet', id: '반려동물' },
  { key: 'beauty', id: '뷰티' },
  { key: 'sports', id: '스포츠' },
  { key: 'cooking', id: '쿠킹' },
  { key: 'all', id: '전체' },
];

const CateBtn = () => {
  const { t, navigateWithLang } = useLanguage();

  const handleClick = (categoryKey) => {
    if (categoryKey === 'all') {
      navigateWithLang('/products/all');
    } else {
      navigateWithLang(`/products/${categoryKey}`);
    }
  };

  return (
    <section id="category">
      <div className="wrap">
        {categories.map(({ key }) => (
          <button key={key} onClick={() => handleClick(key)}>
            {t(`categories.${key}`)}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CateBtn;
