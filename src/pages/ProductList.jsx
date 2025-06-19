// D:\studio3\1-D-CLASS\src\pages\ProductList.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';                      // ← axios 추가
import FilterPanel from '../components/FilterPanel';
import Card from '../components/Card';
import '../assets/css/card-basic.css';

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: category === '전체' ? '' : category || '',
    day: '',
    level: '',
    person: '',
    tag: [],
    priceRange: [0, 100000],
  });

  // → ① 백엔드 API 에서 상품 가져오기
  useEffect(() => {
    axios.get('http://localhost:8080/api/products', { withCredentials: true })
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error('상품 로딩 실패:', err);
      });
  }, []);

  // 카테고리 URL 변경 시 필터 동기화
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      category: category === 'all' ? '' : category || '',
    }));
  }, [category]);

  // ② products 또는 filters 변경되면 filteredProducts 재계산
  useEffect(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters.day) {
      filtered = filtered.filter(p => p.day === filters.day);
    }
    if (filters.level) {
      filtered = filtered.filter(p => p.level === filters.level);
    }
    if (filters.person && filters.person !== '선택안함') {
      const num = Number(filters.person.replace(/[^0-9]/g, ''));
      filtered = filters.person.endsWith('명이상')
        ? filtered.filter(p => p.person >= num)
        : filtered.filter(p => p.person === num);
    }
    if (filters.tag.length > 0) {
      filtered = filtered.filter(p =>
        filters.tag.every(t => Array.isArray(p.tag) && p.tag.includes(t))
      );
    }
    filtered = filtered.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleApply = newFilters => setFilters(newFilters);
  const handleReset = () => setFilters({
    category: category === '전체' ? '' : category || '',
    day: '',
    level: '',
    person: '',
    tag: [],
    priceRange: [0, 100000],
  });

  return (
    <div className="wrap">
      <FilterPanel
        onApply={handleApply}
        onReset={handleReset}
        selectedFilters={filters}
      />
      <p>{filteredProducts.length}개의 클래스</p>
      {filteredProducts.length > 0 ? (
        <ul className="product-list-container">
          {filteredProducts.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p>조건에 맞는 상품이 없습니다.</p>
      )}
    </div>
  );
};

export default ProductList;
