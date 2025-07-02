import React from 'react';
import { Link } from 'react-router-dom';
import WishBtn from './WishBtn.jsx';
import useLanguage from '../hooks/useLanguage';

const Card = ({ product, rank }) => {
  const { t, currentLang } = useLanguage();

  // 언어별 텍스트 반환 함수
  const getLocalized = (ko, en) => (currentLang === 'en' ? en : ko);

  // 가격 및 할인 계산 안전 처리
  const price = typeof product.price === 'number' ? product.price : 0;
  const discount = typeof product.discount === 'number' ? product.discount : 1;
  const discountedPrice = Math.round(price * discount);
  const discountPercent = Math.round((1 - discount) * 100);

  return (
    <li>
      <article className='best-info'>
        <img
          src={product.mainImg}
          alt={getLocalized(product.name_ko, product.name_en) || 'product image'}
        />
        <WishBtn className='best-book' product={product} />
        <span className='num'>{rank}</span>
        <Link className="card" to={`/${currentLang}/product/${product.id}`}>
          <div className='info-top'>
            <div className="tags">
              <span>{getLocalized(product.category_ko, product.category_en)}</span>
              <span>{getLocalized(product.day_ko, product.day_en)}</span>
            </div>
            <div className="best-rating">
              <span className='review'>{product.reviewCount ?? 0}</span>
              <span className='wish'>{product.wishCount ?? 0}</span>
            </div>
          </div>
          <h3 className="h3">{getLocalized(product.name_ko, product.name_en)}</h3>
          <p className="p">{getLocalized(product.p_ko, product.p_en)}</p>
          <div className="price">
            <span className='discount'>{discountPercent}%</span>
            <p className="p">
              <span>{price.toLocaleString()}{t('won')}</span> {' '}
              {discountedPrice.toLocaleString()}{t('won')}
            </p>
          </div>
        </Link>
      </article>
    </li>
  );
};

export default Card;
