import React, { forwardRef } from 'react';
import useLanguage from '../../hooks/useLanguage';

const Section2 = forwardRef((props, ref) => {
  const { t } = useLanguage();

  return (
    <section className="wrap product-section" id="section2" ref={ref}>
      <h2>{t('curriculum.title')}</h2>
      <ul className="curriculum-list">
        <li>
          <strong>
            <span className="step-label">{t('curriculum.step1.label')}</span> {t('curriculum.step1.title')}
          </strong>
          <p>{t('curriculum.step1.desc1')}</p>
          <p>{t('curriculum.step1.desc2')}</p>
        </li>

        <li>
          <strong>
            <span className="step-label">{t('curriculum.step2.label')}</span> {t('curriculum.step2.title')}
          </strong>
          <p>{t('curriculum.step2.desc1')}</p>
          <p>{t('curriculum.step2.desc2')}</p>
        </li>

        <li>
          <strong>
            <span className="step-label">{t('curriculum.step3.label')}</span> {t('curriculum.step3.title')}
          </strong>
          <p>{t('curriculum.step3.desc1')}</p>
          <p>{t('curriculum.step3.desc2')}</p>
        </li>

        <li>
          <strong>
            <span className="step-label">{t('curriculum.step4.label')}</span> {t('curriculum.step4.title')}
          </strong>
          <p>{t('curriculum.step4.desc1')}</p>
          <p>{t('curriculum.step4.desc2')}</p>
        </li>

        <li>
          <strong>
            <span className="step-label">{t('curriculum.step5.label')}</span> {t('curriculum.step5.title')}
          </strong>
          <p>{t('curriculum.step5.desc1')}</p>
          <p>{t('curriculum.step5.desc2')}</p>
        </li>

        <li>
          <strong>
            <span className="step-label">{t('curriculum.step6.label')}</span> {t('curriculum.step6.title')}
          </strong>
          <p>{t('curriculum.step6.desc1')}</p>
          <p>{t('curriculum.step6.desc2')}</p>
        </li>

        <li>
          <strong>
            <span className="step-label">{t('curriculum.step7.label')}</span> {t('curriculum.step7.title')}
          </strong>
          <p>{t('curriculum.step7.desc1')}</p>
          <p>{t('curriculum.step7.desc2')}</p>
        </li>

        <li>
          <strong>
            <span className="step-label">{t('curriculum.step8.label')}</span> {t('curriculum.step8.title')}
          </strong>
          <p>{t('curriculum.step8.desc1')}</p>
          <p>{t('curriculum.step8.desc2')}</p>
        </li>
      </ul>
    </section>
  );
});

export default Section2;
