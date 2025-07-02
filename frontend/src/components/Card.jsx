import React from 'react';
import { Link } from 'react-router-dom';
import WishBtn from './WishBtn.jsx';
import useLanguage from '../hooks/useLanguage';

const Card = ({ product }) => {
  const { t, currentLang } = useLanguage();

  // 언어별 텍스트 반환 함수
  const getLocalized = (ko, en) => (currentLang === 'en' ? en : ko);

  // price가 숫자면 toLocaleString 적용, 아니면 빈 문자열 처리
  const formattedPrice = typeof product.price === 'number' 
    ? product.price.toLocaleString() 
    : '';

  return (
    <li className='relative'>
      <article>
        <WishBtn product={product} />
        <Link className="card" to={`/${currentLang}/product/${product.id}`}>
          <img 
            src={product.mainImg} 
            alt={getLocalized(product.name_ko, product.name_en) || 'product image'} 
          />
          <div className="card-info">
            <div className='title'>
              <h3>{getLocalized(product.name_ko, product.name_en)}</h3>
            </div>
            <div className='cate'>
              <p className='cateP'>{getLocalized(product.category_ko, product.category_en)}</p>
              <p className='dayP'>{getLocalized(product.day_ko, product.day_en)}</p>
            </div>
            <div className='rating'>
              <p className='review'>{product.reviewCount ?? 0}</p>      
              <p className='wish'>{product.wishCount ?? 0}</p>
            </div>
            <div className='price'>
              <p>{formattedPrice}{t('won')}</p>
            </div>         
            <div className="tags">
              {Array.isArray(product.tag) && product.tag.map((tagObj, index) => (
                <span key={index} className="tag">
                  {getLocalized(tagObj.tag_ko, tagObj.tag_en)}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </article>
       
    </li>
  );
};

export default Card;
