// Section1.jsx
import React, { forwardRef } from 'react';
import useLanguage from '../../hooks/useLanguage';

const Section1 = forwardRef((props, ref) => {
  const { t } = useLanguage();

  return (
    <section className="wrap product-section" id="section1" ref={ref}>
      <h2>{t('section1.title')}</h2>
      {t('section1.paragraphs', { returnObjects: true }).map((paragraph, idx) => (
        <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </section>
  );
});

export default Section1;
