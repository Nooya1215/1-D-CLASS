import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import productList from '../data/products.json';
import WishBtn from '../components/WishBtn';
import Section1 from '../components/ProductDetailSections/Section1';
import Section2 from '../components/ProductDetailSections/Section2';
import Section3 from '../components/ProductDetailSections/Section3';
import Section4 from '../components/ProductDetailSections/Section4';
import TabNav from '../components/ProductDetailSections/TabNav';
import 'react-calendar/dist/Calendar.css';
import '../assets/css/productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productList.find((item) => item.id === parseInt(id));
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [count, setCount] = useState(1);
  const [tabOffsetTop, setTabOffsetTop] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const tabRef = useRef(null);
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  // 1. 페이지 진입 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. 탭바 위치를 잡고 scroll 이벤트 감지
  useEffect(() => {

    if (tabRef.current) {
      setTabOffsetTop(tabRef.current.offsetTop);
    }

    const handleScroll = () => {
      if (window.scrollY >= tabOffsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabOffsetTop]);

  const scrollToSection = (id) => {
    const section = sectionRefs[id].current;
    if (section) {
      /* const yOffset = -80; // 탭바 높이만큼 보정 (원하는 값으로 조절) */
      const headerHeight = 60; // 또는 56 (모바일), 반응형이면 useMediaQuery 등으로 감지 가능
      const tabHeight = tabRef.current?.offsetHeight || 80;
      const yOffset = -(headerHeight + tabHeight);
      const targetTop = sectionRefs[id].current?.getBoundingClientRect().top;
      const scrollY = window.pageYOffset + targetTop + yOffset;

      window.scrollTo({ top: scrollY, behavior: 'smooth' });
    }
  };

  const handleDateChange = (date) => {
    const formatted = date.toISOString().split('T')[0];
    setSelectedDate(formatted);
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
              <button onClick={() => setShowCalendar(!showCalendar)}>날짜 선택</button>
              {showCalendar && (
                <Calendar
                  onChange={handleDateChange}
                  value={new Date()}
                  formatDay={(locale, date) => date.getDate()}
                  tileClassName={({ date }) => (date.getDay() === 6 ? 'saturday' : null)}
                />
              )}
              {selectedDate && <p>선택한 날짜: {selectedDate}</p>}
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
              <span className='personCount'>{count}</span>
              <button onClick={handlePlus}>+</button>
            </div>
            <p className="price">{(product.price * count).toLocaleString()}원</p>
            <div className="btns"> 
              <WishBtn product={product}></WishBtn>
              <button className='faqBtn'></button>
              <button className='applyBtn'>클래스 신청하기</button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 탭바 + 섹션들 */}
      <TabNav
        scrollToSection={scrollToSection}
        isSticky={isSticky}
        tabRef={tabRef}
      />
      <Section1 ref={sectionRefs.section1} />
      <Section2 ref={sectionRefs.section2} />
      <Section3 ref={sectionRefs.section3} />
      <Section4 ref={sectionRefs.section4} />
    </>
  );
};

export default ProductDetail;
