import React from 'react';
import { Link } from 'react-router-dom';
import WishBtn from './WishBtn.jsx';

const Card = ({ product, rank }) => {  // rank 추가 받기
  return (
    <li>
      <article className='best-info'>
        <img src={product.mainImg} alt={product.name} />
        <WishBtn className='best-book' product={product} />
        <span className='num'>{rank}</span>  {/* 순위 출력 */}
        <Link className="card" to={`/product/${product.id}`}>
          <div className='info-top'>
            <div className="tags">
              <span>{product.category}</span>
              <span>{product.day}</span>
            </div>
            <div className="best-rating">
              <span className='review'>{product.reviewCount}</span>
              <span className='wish'>{product.wishCount}</span>
            </div>
          </div>
          <h3 className="h3">{product.name}</h3>
          <p className="p">{product.p}</p>
          <div className="price">
            <span className='discount'>{Math.round((1 - product.discount) * 100)}%</span>
            <p className="p">
              <span>{product.price.toLocaleString()}원</span>
              {Math.round(product.price * product.discount).toLocaleString()}원
            </p>
          </div>
        </Link>
      </article>
    </li>
  );
};

export default Card;
