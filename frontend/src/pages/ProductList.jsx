import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FilterPanel from '../components/FilterPanel';
import Card from '../components/Card';
import useLanguage from '../hooks/useLanguage';
import '../assets/css/Productlist.css';
import '../assets/css/card-basic.css';

const ProductList = () => {
  const { t, currentLang } = useLanguage();
  const { category: rawCategory } = useParams();

  /** 문자열 정규화 (디코드+트림+소문자) */
  const normalize = (str) =>
    str ? decodeURIComponent(str).trim().toLowerCase() : '';

  /** "all"/"전체"를 모두 처리하는 버전 */
  const normalizeCategory = (cat) => {
    const decoded = normalize(cat);
    if (decoded === 'all' || decoded === '전체') return '';
    return decoded;
  };

  /** 초기 카테고리 상태값 */
  const [filters, setFilters] = useState({
    category: normalizeCategory(rawCategory),
    day: '',
    level: '',
    person: '',
    tag: [],
    priceRange: [0, 100000],
  });

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  /** 언어별 필드 선택 */
  const getLocalized = (ko, en) => (currentLang === 'en' ? en : ko);

  /** 상품 데이터 최초 로드 */
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products', { withCredentials: true })
      .then((res) => setProducts(res.data))
      .catch((err) =>
        console.error(t('product_load_fail') || '상품 로딩 실패:', err)
      );
  }, [t]);

  /** 언어 또는 URL category 변경 시 카테고리 필터 동기화 */
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: normalizeCategory(rawCategory),
    }));
  }, [rawCategory]);

  /** 필터링 처리 */
  useEffect(() => {
    let filtered = [...products];

    // 카테고리 필터
    if (filters.category) {
      filtered = filtered.filter((p) => {
        const catKo = normalize(p.category_ko);
        const catEn = normalize(p.category_en);
        return filters.category === catKo || filters.category === catEn;
      });
    }

    // 요일 필터
    if (filters.day) {
      filtered = filtered.filter(
        (p) =>
          normalize(getLocalized(p.day_ko, p.day_en)) ===
          normalize(filters.day)
      );
    }

    // 난이도 필터
    if (filters.level) {
      filtered = filtered.filter(
        (p) =>
          p.level?.trim().toLowerCase() ===
          filters.level.trim().toLowerCase()
      );
    }

    // 인원 필터
    if (filters.person && filters.person !== t('filter.no_selection')) {
      const num = Number(filters.person.replace(/[^0-9]/g, ''));
      const isMoreThan =
        filters.person.endsWith(
          currentLang === 'en' ? 'persons' : '명이상'
        );
      filtered = filtered.filter((p) =>
        isMoreThan ? p.person >= num : p.person === num
      );
    }

    // 태그 필터
    if (filters.tag.length > 0) {
      filtered = filtered.filter((p) =>
        filters.tag.every((tg) =>
          Array.isArray(p.tag)
            ? p.tag.some(
                (tagObj) =>
                  normalize(tagObj.tag_ko) === normalize(tg) ||
                  normalize(tagObj.tag_en) === normalize(tg)
              )
            : false
        )
      );
    }

    // 가격 범위 필터
    filtered = filtered.filter(
      (p) =>
        p.price >= filters.priceRange[0] &&
        p.price <= filters.priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [filters, products, currentLang, t]);

  /** 필터 적용 / 초기화 핸들러 */
  const handleApply = (newFilters) => setFilters(newFilters);
  const handleReset = () =>
    setFilters({
      category: normalizeCategory(rawCategory),
      day: '',
      level: '',
      person: '',
      tag: [],
      priceRange: [0, 100000],
    });

  return (
    <div id="product-list" className='wrap'>
      <FilterPanel
        onApply={handleApply}
        onReset={handleReset}
        selectedFilters={filters}
      />

      <p className="num">
        {filteredProducts.length} {t("classes")}
      </p>

      {filteredProducts.length > 0 ? (
        <ul className="product-list-container">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p className="num">{t("no_matching_products")}</p>
      )}
    </div>
  );
};

export default ProductList;
