import React from 'react';
import "../assets/css/best.css";

export default function Best() {
  return (
    <section id="best">
      <div className="wrap">
        <h2 className="h2">Best 클래스</h2>
        <ul className='best-list'>
          <li>
            <article className='best-info'>
              <img src="https://placehold.co/150x120" alt="" />
              <button className='best-book'></button>
              <span className='num'>1</span>
              <a href="">
                <div className='info-top'>
                  <div className="tags">
                    <span>반려동물</span>
                    <span>주말</span>
                  </div>
                  <div className="best-rating">
                    <span>4.7</span>
                    <span>567</span>
                  </div>
                </div>
                <h3 className="h3">손으로 만드는 첫 장난감, 우리 강아지에게</h3>
                <p className="p">재봉이 처음인 분도 쉬게 따라 할 수 있도록 구성되어 있어요.</p>
                <div className="price">
                  <span className='discount'>30%</span>
                  <p className="p"><span>80,000원</span>56,000원</p>
                </div>
              </a>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}