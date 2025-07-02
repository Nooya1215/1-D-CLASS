// src/pages/WishList.jsx
import React from 'react';
import { useWish } from '../context/WishContext';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import EmptyWish from '../components/EmptyWish';
import EmptyWishMobile from '../components/EmptyWishMobile'; //반응형
import '../assets/css/card-basic.css';
import '../assets/css/WishListPage.css';
import { useTranslation } from 'react-i18next';

const WishList = () => {
  const { t } = useTranslation();
  const { wishList } = useWish();
  const isMobile = window.innerWidth <= 768;

  return (
    <section id='wishList'>
      {wishList.length === 0 ? (
        isMobile ? <EmptyWishMobile /> : <EmptyWish />
      ) : (
        <div className='wrap product-list'>
          <h2>{t('wishList.title')}</h2>
          <p>{t('wishList.description')}</p>
          <ul className="product-list-container">
            {wishList.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </ul>
        </div>
      )}
    </section>

  );
};

export default WishList;
