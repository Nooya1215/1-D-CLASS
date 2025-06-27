// Section3.jsx
import React, { forwardRef } from 'react';

const Section3 = forwardRef((props, ref) => (
  <section className="wrap product-section" id="section3" ref={ref}>
    <h2>튜터 소개</h2>
    <p>이곳에 튜터 소개에 대한 설명을 작성합니다.</p>
  </section>
));

export default Section3;