import React from 'react';
import "../assets/css/category.css";

export default function Category() {
  return (
    <section id="category">
      <div className="wrap">
        <ul className='category-list'>
          <li><a href="">반려동물</a></li>
          <li><a href="">뷰티</a></li>
          <li><a href="">스포츠</a></li>
          <li><a href="">쿠킹</a></li>
          <li><a href="">전체 카테고리</a></li>
        </ul>
      </div>
    </section>
  );
}
