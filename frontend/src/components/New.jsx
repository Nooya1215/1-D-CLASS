import React, { useState, useEffect } from 'react';
import axios from 'axios';  // axios 임포트 추가
import Card from '../components/Card';
import "../assets/css/new.css";

export default function New() {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')  // 백엔드 API 주소
      .then((res) => {
        const data = res.data;
        // updatedAt 날짜 기준 내림차순 정렬
        const sorted = data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setNewProducts(sorted.slice(0, 8));
      })
      .catch((err) => {
        console.error('신상품 로딩 실패:', err);
      });
  }, []);

  return (
    <section id="new">
      <div className="wrap">
        <h2 className="h2">NEW 클래스</h2>
        <ul className='new-list'>
          {newProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
}
