import React from 'react';
import "../assets/css/new.css";

export default function New() {
  return (
    <section id="new">
      <div className="wrap">
        <h2 className="h2">NEW 클래스</h2>
        <ul className='new-list'>
          <li>
            <article>
              <a href="" className="card">
                <img src="" alt="" />
                <div className="card-info">
                  <div className="meta">
                    <div className="cate">
                      <span>반려동물</span>
                      <span>평일</span>
                    </div>
                    <div className="rating">
                      <span>⭐ 4.7</span>
                      <span>567</span>
                    </div>
                  </div>
                  <h3 className="title">클래스 네임</h3>
                  <div className='meta'>
                    <div className="tags">
                      <span>선물용</span>
                      <span>친구랑</span>
                      <span>펫동반</span>
                    </div>
                    <p className="price">56,000원</p>
                  </div>
                </div>
              </a>
            </article>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}