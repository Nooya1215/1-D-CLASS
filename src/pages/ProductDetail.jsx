import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import productList from '../data/products.json';
import WishBtn from '../components/WishBtn';
import Section1 from '../components/ProductDetailSections/Section1';
import Section2 from '../components/ProductDetailSections/Section2';
import Section3 from '../components/ProductDetailSections/Section3';
import Section4 from '../components/ProductDetailSections/Section4';
import 'react-calendar/dist/Calendar.css';
import '../assets/css/productDetail.css';
import '../assets/css/productSection.css'

const ProductDetail = () => {
  const { id } = useParams();
  const product = productList.find((item) => item.id === parseInt(id));
  const [count, setCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState('section1');

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  const tabRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const section = sectionRefs[id]?.current;
    if (section) {
      const headerHeight = 80; // ✅ 헤더 높이
      const tabHeight = 66;    // ✅ 탭 높이
      const scrollY = section.getBoundingClientRect().top + window.pageYOffset - headerHeight - tabHeight;
      window.scrollTo({ top: scrollY, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d
      .getDate()
      .toString()
      .padStart(2, '0')}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };

  const handlePlus = () => {
    if (count < product.person) setCount(count + 1);
  };

  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <>
      <section id="detailTitle">
        <div className="wrap">
          <div className="img">
            <img src={product.mainImg} alt={product.name} />
          </div>

          <div className="info">
            <ul>
              <li>{product.category}</li>
              <li>{product.duration}</li>
              <li>{product.level}</li>
              <li>1~{product.person}명</li>
            </ul>
          </div>

          <div className="reservation">
            <h2>{product.name}</h2>
            <ul className="product-info">
              <li className="review">{product.reviewCount}</li>
              <li className="wish">{product.wishCount}</li>
              <li className="place">정보없음</li>
            </ul>
            <div className="date">
              <button onClick={() => setShowCalendar(!showCalendar)}>
                <span>{selectedDate ? formatDate(selectedDate) : formatDate(new Date())}</span>
              </button>
              {showCalendar && (
                <Calendar
                  onChange={handleDateChange}
                  value={new Date()}
                  formatDay={(locale, date) => date.getDate()}
                  tileClassName={({ date }) => (date.getDay() === 6 ? 'saturday' : null)}
                />
              )}
            </div>
            <p className="notice">※ 클래스 신청 전, 확인해주세요!</p>
            <div className="tags">
              {product.tag.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
            <div className="person">
              <span>인원</span>
              <button onClick={handleMinus}>-</button>
              <span className="personCount">{count}</span>
              <button onClick={handlePlus}>+</button>
            </div>
            <p className="price">{(product.price * count).toLocaleString()}원</p>
            <div className="btns">
              <WishBtn product={product} iconType="gray" />
              <button className="faqBtn"></button>
              <button className="applyBtn">클래스 신청하기</button>
            </div>
          </div>
        </div>
      </section>
      <div className='detail-body'>
        {/* ✅ 탭바 (sticky) */}
        <div className="tab" ref={tabRef}>
          <nav className="tab-nav">
            <ul>
              <li className={activeTab === 'section1' ? 'active' : ''} onClick={() => scrollToSection('section1')}>클래스 소개</li>
              <li className={activeTab === 'section2' ? 'active' : ''} onClick={() => scrollToSection('section2')}>커리큘럼</li>
              <li className={activeTab === 'section3' ? 'active' : ''} onClick={() => scrollToSection('section3')}>튜터 소개</li>
              <li className={activeTab === 'section4' ? 'active' : ''} onClick={() => scrollToSection('section4')}>후기</li>
            </ul>
          </nav>
        </div>

        {/* ✅ sticky된 tab이 겹치지 않게 높이 보정 */}
        <div style={{ height: '66px' }}></div>

        {/* ✅ 각 섹션 연결 */}
        <Section1 ref={sectionRefs.section1} />
        <Section2 ref={sectionRefs.section2} />
        <Section3 ref={sectionRefs.section3} />
        <Section4 ref={sectionRefs.section4} />
      </div>
    </>
  );
};

export default ProductDetail;
