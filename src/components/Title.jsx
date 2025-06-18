import React, { useEffect } from 'react';
import title1 from "../assets/img/svg/rectangle.svg";
import "../assets/css/title.css";

export default function Title() {
  useEffect(() => {
    const $ = window.$;
    const $slider = $('.title-slide');

    if ($slider.hasClass('slick-initialized')) {
      $slider.slick('unslick');
    }

    $slider.slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: 'linear',
      customPaging: function (slider, i) {
        return '<span class="custom-dot">' + (i + 1) + ' / ' + slider.slideCount + '</span>';
      },
    });

    return () => {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    };
  }, []);

  return (
    <div id="title">
      <div className="wrap">
        <ul className="title-slide">
          <li>
            <img src={title1} alt="타이틀 이미지" />
            <h2 className="h2">1:D CLASS는<br />ONE DAY CLASS입니다</h2>
          </li>
          <li>
            <img src={title1} alt="타이틀 이미지" />
            <h2 className="h2">1:D CLASS는<br />ONE DAY CLASS입니다</h2>
          </li>
          <li>
            <img src={title1} alt="타이틀 이미지" />
            <h2 className="h2">1:D CLASS는<br />ONE DAY CLASS입니다</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
