import React, { forwardRef } from 'react';
import useLanguage from '../../hooks/useLanguage';

const Section3 = forwardRef((props, ref) => {
  const { t } = useLanguage();

  return (
    <section className="wrap product-section" id="section3" ref={ref}>
      <h2>{t('section3.title')}</h2>
      <div className='tutor'>
        <div className="profile">
          <div className='img-box'>
            <img src="/img/tutor.jpg" alt={t('section3.altText')} className="profile-img" />
          </div>
          <div className="basic-info">
            <strong className="name">{t('section3.name')}</strong>
            <div className="sns">
              <a className='instagram' href="https://instagram.com/" target="_blank" rel="noopener noreferrer">{t('section3.instagram')}</a>
              <a className='utube' href="https://youtube.com" target="_blank" rel="noopener noreferrer">{t('section3.youtube')}</a>
            </div>
          </div>
        </div>

        <p className="qualification">{t('section3.qualification')}</p>
        <div className="description">
          <p>{t('section3.description')}</p>
        </div>
      </div>
    </section>
  );
});

export default Section3;
