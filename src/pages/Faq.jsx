import React from 'react';
import "../assets/css/faq.css";
import FaqList from '../components/FaqList';

export default function Faq() {
  return (
    <>
      <div id="faq">
        <div className="wrap">
          <div className='faq-top'>
            <h2 className="h2">FAQ</h2>
            <a href="" className='faq-btn'>1:1 문의하기</a>
          </div>
          <ul className='faq-list'>
            <li><a href="">이용 관련</a></li>
            <li><a href="">취소 및 환불 관련</a></li>
            <li><a href="">클래스 관련</a></li>
            <li><a href="">개인 메뉴 관련</a></li>
            <li><a href="">기타 시스템 및 정책</a></li>
          </ul>
        </div>  
      </div>
      <FaqList />
    </>
  );
}
