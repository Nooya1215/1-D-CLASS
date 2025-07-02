import React, { useEffect, useState } from 'react';
import "../assets/css/review.css";

export default function Review() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const banners = [1, 2, 3, 4, 5];

  return (
    <section id="review">
      <div className="wrap">
        <h2 className="h2 brown">REVIEW</h2>
        <ul className='review-list'>
          {banners.map((num) => (
            <li key={num}>
              <img
                src={
                  isMobile
                    ? `/img/m-banner${num}.png`
                    : `/img/banner${num}.png`
                }
                alt={`리뷰 이미지 ${num}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}