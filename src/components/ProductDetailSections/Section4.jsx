// Section4.jsx
import React, { forwardRef } from 'react';

const Section4 = forwardRef((props, ref) => (
  <section className="wrap product-section" id="section4" ref={ref}>
    <h2>후기</h2>
    <p>이곳에 후기에 대한 설명을 작성합니다.</p>
  </section>
));

export default Section4;