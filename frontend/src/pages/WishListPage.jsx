// src/pages/WishList.jsx
import React from 'react';
import { useWish } from '../context/WishContext';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import '../assets/css/card-basic.css';
import '../assets/css/WishListPage.css';
import { useTranslation } from 'react-i18next';

const WishList = () => {
  const { t } = useTranslation();
  const { wishList } = useWish();

  return (
    <section id='Wishlist'>
      <div className='wrap'>
        <h2>{t('wishList.title')}</h2>
        <p>{t('wishList.description')}</p>
        <ul className="product-list-container">
          {wishList.length === 0 ? (
            <li className="empty-list">
              <p>{t('wishList.emptyMessage1')}</p>
              <p>{t('wishList.emptyMessage2')}<span>{t('wishList.emptyMessage2Span')}</span></p>
              <Link to="/products/all" className='btn'>{t('wishList.browseBtn')}</Link>
            </li>
          ) : (
            wishList.map((product) => <Card key={product.id} product={product} />)
          )}
        </ul>
      </div>
    </section>
  );
};

export default WishList;
