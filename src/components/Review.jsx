import React, { useEffect } from 'react';
import "../assets/css/review.css";

export default function Review() {
  useEffect(() => {
    const $ = window.$;
    const $slider = $('.review-list');

    if ($slider.hasClass('slick-initialized')) {
      $slider.slick('unslick');
    }

    $slider.slick({
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    });

    return () => {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    };
  }, []);

  return (
    <section id="review">
      <div className="wrap">
        <h2 className="h2 brown">REVIEW</h2>
        <ul className='review-list'>
          <li>
            <picture>
              <source srcSet="/img/m-banner1.png" media="(max-width: 768px)" />
              <img src="/img/banner1.png" alt="리뷰 이미지 1" />
            </picture>
          </li>
          <li>
            <picture>
              <source srcSet="/img/m-banner2.png" media="(max-width: 768px)" />
              <img src="/img/banner2.png" alt="리뷰 이미지 2" />
            </picture>
          </li>
          <li>
            <picture>
              <source srcSet="/img/m-banner3.png" media="(max-width: 768px)" />
              <img src="/img/banner3.png" alt="리뷰 이미지 3" />
            </picture>
          </li>
          <li>
            <picture>
              <source srcSet="/img/m-banner4.png" media="(max-width: 768px)" />
              <img src="/img/banner4.png" alt="리뷰 이미지 4" />
            </picture>
          </li>
          <li>
            <picture>
              <source srcSet="/img/m-banner5.png" media="(max-width: 768px)" />
              <img src="/img/banner5.png" alt="리뷰 이미지 5" />
            </picture>
          </li>
        </ul>
      </div>
    </section>
  );
}
