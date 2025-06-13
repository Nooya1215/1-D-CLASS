import React, { useEffect } from 'react';
import "../assets/css/review.css";

export default function Review() {
  useEffect(() => {
    const $slider = window.$('.review-list');

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
    });
  }, []);

  return (
    <section id="review">
      <div className="wrap">
        <h2 className="h2">REVIEW</h2>
        <ul className='review-list'>
          <li>
            <h3 className="h3">우드펜 만들기 클래스</h3>
            <p className="p">❝ 선생님이 정말 친절하셨어요! ❞ <br />완성작도 너무 만족스럽습니다 :)</p>
            <span>lee_yurim</span>
          </li>
          <li>
            <h3 className="h3">우드펜 만들기 클래스</h3>
            <p className="p">❝ 선생님이 정말 친절하셨어요! ❞ <br />완성작도 너무 만족스럽습니다 :)</p>
            <span>lee_yurim</span>
          </li>
          <li>
            <h3 className="h3">우드펜 만들기 클래스</h3>
            <p className="p">❝ 선생님이 정말 친절하셨어요! ❞ <br />완성작도 너무 만족스럽습니다 :)</p>
            <span>lee_yurim</span>
          </li>
          <li>
            <h3 className="h3">우드펜 만들기 클래스</h3>
            <p className="p">❝ 선생님이 정말 친절하셨어요! ❞ <br />완성작도 너무 만족스럽습니다 :)</p>
            <span>lee_yurim</span>
          </li>
          <li>
            <h3 className="h3">우드펜 만들기 클래스</h3>
            <p className="p">❝ 선생님이 정말 친절하셨어요! ❞ <br />완성작도 너무 만족스럽습니다 :)</p>
            <span>lee_yurim</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
