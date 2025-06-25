// src/components/WishBtn.jsx
import React from 'react';
import { useWish } from '../context/WishContext';
import bookmarkFull from '/img/bookmark-p.png';
import bookmarkWhite from '/img/bookmark-w.png';

const WishBtn = ({ product }) => {
  const { toggleWish, isWished } = useWish();
  const wished = isWished(product.id);

  return (
    <button className='wish-btn'
      onClick={(e) => {
        e.preventDefault(); // 링크 클릭 방지
        toggleWish(product);
      }}
    >
      <img src={wished ? bookmarkFull : bookmarkWhite} alt="찜하기"/>
    </button>
  );
};

export default WishBtn;
