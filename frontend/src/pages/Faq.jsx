import React, { useEffect } from 'react';
import "../assets/css/faq.css";
import FaqList from '../components/FaqList';
import useLanguage from '../hooks/useLanguage';

export default function Faq() {
  const { t, currentLang, toggleLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.$) {
      const $ = window.$;
      const $links = $('.faq-list li a');
      const $sections = $('.list');

      // 클릭 시 스크롤 및 active 토글
      $links.on('click', function(e) {
        e.preventDefault();
        const index = $(this).parent().index();

        $links.removeClass('active');
        $(this).addClass('active');

        const target = $sections.eq(index);
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 300);
        }
      });

      // 스크롤 시 섹션 위치 체크해서 active 변경
      const onScroll = () => {
        const scrollTop = $(window).scrollTop();
        let currentIndex = 0;

        $sections.each((i, section) => {
          const offsetTop = $(section).offset().top;
          if (scrollTop >= offsetTop - 100) {  // 100은 약간의 오차 범위
            currentIndex = i;
          }
        });

        $links.removeClass('active');
        $links.eq(currentIndex).addClass('active');
      };

      $(window).on('scroll', onScroll);

      // 초기 실행
      onScroll();

      return () => {
        $links.off('click');
        $(window).off('scroll', onScroll);
      };
    }
  }, []);

  return (
    <>
      <div id="faq">
        <div className="wrap">
          <div className='faq-top'>
            <h2 className="h2">FAQ</h2>
            <a href="#" className='faq-btn'>{t('inquiry')}</a>
          </div>
          <ul className='faq-list'>
            <li><a href="#faqList" className='active'>{t('usage')}</a></li>
            <li><a href="#">{t('refund')}</a></li>
            <li><a href="#">{t('class')}</a></li>
            <li><a href="#">{t('menu')}</a></li>
            <li><a href="#">{t('system')}</a></li>
          </ul>
        </div>  
      </div>
      <FaqList />
    </>
  );
}
