// Section2.jsx
import React, { forwardRef } from 'react';

const Section2 = forwardRef((props, ref) => (
  <section className="wrap product-section" id="section2" ref={ref}>
    <h2>커리큘럼</h2>
    <p>이곳에 커리큘럼에 대한 설명을 작성합니다.</p>
  </section>
));

export default Section2;