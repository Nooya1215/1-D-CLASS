// Section1.jsx
import React, { forwardRef } from 'react';

const Section1 = forwardRef((props, ref) => (
  <section className="wrap product-section" id="section1" ref={ref}>
    <h2>클래스 소개</h2>
    <p>이곳에 클래스에 대한 설명을 작성합니다.</p>
  </section>
));

export default Section1;