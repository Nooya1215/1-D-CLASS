import React, { useEffect } from 'react';
import "../assets/css/faq.css";
import FaqList from '../components/FaqList';

export default function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.$) {
      const $ = window.$;

      $('.faq-list li a').on('click', function(e) {
        e.preventDefault();
        const index = $(this).parent().index();

        const target = $('.list').eq(index);

        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 300);
        }
      });

      return () => {
        $('.faq-list li a').off('click');
      };
    }
  }, []);

  return (
    <>
      <div id="faq">
        <div className="wrap">
          <div className='faq-top'>
            <h2 className="h2">FAQ</h2>
            <a href="#" className='faq-btn'>1:1 문의하기</a>
          </div>
          <ul className='faq-list'>
            <li><a href="#faqList">이용 관련</a></li>
            <li><a href="#">취소 및 환불 관련</a></li>
            <li><a href="#">클래스 관련</a></li>
            <li><a href="#">개인 메뉴 관련</a></li>
            <li><a href="#">기타 시스템 및 정책</a></li>
          </ul>
        </div>  
      </div>
      <FaqList />
    </>
  );
}
