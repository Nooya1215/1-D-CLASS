// src/pages/WishList.jsx
import React from 'react';
import { useWish } from '../context/WishContext';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import '../assets/css/card-basic.css';
import '../assets/css/WishListPage.css';

const WishList = () => {
  const { wishList } = useWish();

  return (
    <div className='wrap'>
      <h2>관심 있는 클래스</h2>
      <p>언젠가 해보고 싶은 클래스를 모아봤어요.</p>
      <ul className="product-list-container">
        {wishList.length === 0 ? (
          <li className="empty-list">
            <p>아직 찜한 클래스가 없어요!</p>
            <p>마음에 드는 클래스를<span>눌러 담아보세요.</span></p>
            <Link to="/products/all" className='btn'>클래스 둘러보기</Link>
          </li>
        ) : (
          wishList.map((product) => <Card key={product.id} product={product} />)
        )}
      </ul>
    </div>
  );
};

export default WishList;
