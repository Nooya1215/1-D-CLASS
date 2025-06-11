import React from 'react';
import "../assets/css/title.css";
import "../assets/js/title.js";
import title1 from "../assets/img/svg/rectangle.svg"

export default function Title() {
  return (
    <div id="title">
      <div className="wrap">
        <ul className='title-slide'>
          <li>
            <img src={title1} alt="타이틀 이미지" />
            <h2 className="h2">1:D CLASS는<br />ONE DAY CLASS입니다</h2>
          </li>
          <li>
            <img src="https://placehold.co/1903x550" alt="타이틀 이미지" />
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
