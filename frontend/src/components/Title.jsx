import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import useLanguage from '../hooks/useLanguage';
import "../assets/css/title.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Title() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const images = document.querySelectorAll('.title-slide img');
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setLoaded(true);
          }
        });
      }
    });

    if (loadedCount === images.length) {
      setLoaded(true);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: false,
    cssEase: 'ease-in-out',
    adaptiveHeight: false,
    customPaging: (i) => <span className="custom-dot">{i + 1} / 3</span>,
    appendDots: (dots) => <ul className="slick-dots">{dots}</ul>,
  };

  return (
    <div id="title">
      <div className="box">
        {loaded && (
          <Slider {...settings} className="title-slide">
            <div>
              <picture>
                <source srcSet="/img/m-title1.jpg" media="(max-width: 768px)" />
                <img src="/img/title1.jpg" alt={t('title.slide1_alt')} />
              </picture>
              <h2 className="h2">
                {t('title.slide1_line1')}<br className="br-m" />
                {t('title.slide1_line2')}<br />
                {t('title.slide1_line3')}
              </h2>
            </div>
            <div>
              <picture>
                <source srcSet="/img/m-title2.jpg" media="(max-width: 768px)" />
                <img src="/img/title2.jpg" alt={t('title.slide2_alt')} />
              </picture>
              <h2 className="h2">
                {t('title.slide2_line1')}<br />
                {t('title.slide2_line2')}<br className="br-m" />
                {t('title.slide2_line3')}
              </h2>
            </div>
            <div>
              <picture>
                <source srcSet="/img/m-title3.jpg" media="(max-width: 768px)" />
                <img src="/img/title3.jpg" alt={t('title.slide3_alt')} />
              </picture>
              <h2 className="h2">
                {t('title.slide3')}
              </h2>
            </div>
          </Slider>
        )}
      </div>
    </div>
  );
}
