// ProductDetail.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import WishBtn from '../components/WishBtn';
import Section1 from '../components/ProductDetailSections/Section1';
import Section2 from '../components/ProductDetailSections/Section2';
import Section3 from '../components/ProductDetailSections/Section3';
import Section4 from '../components/ProductDetailSections/Section4';
import useLanguage from '../hooks/useLanguage';
import 'react-calendar/dist/Calendar.css';
import '../assets/css/productDetail.css';
import '../assets/css/productSection.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { t, currentLang } = useLanguage();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
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

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:8080/api/products/${id}`);
        if (!res.ok) throw new Error(t('productDetail.notFound'));
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, t]);

  const scrollToSection = (id) => {
    const section = sectionRefs[id]?.current;
    if (section) {
      const headerHeight = 80;
      const tabHeight = 66;
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
    if (product && count < product.person) setCount(count + 1);
  };

  if (loading) return <p>{t('loading')}</p>;
  if (!product) return <p>{t('productDetail.notFound')}</p>;

  return (
    <>
      <section id="detailTitle">
        <div className="wrap">
          <div className="img">
            <img
              src={product[`mainImg_${currentLang}`] || product.mainImg}
              alt={product[`name_${currentLang}`] || product.name_ko}
            />
          </div>

          <div className="info">
            <ul>
              <li>{product[`category_${currentLang}`] || product.category_ko}</li>
              <li>{product[`duration_${currentLang}`] || product.duration_ko}</li>
              <li>{product[`level_${currentLang}`] || product.level_ko}</li>
              <li>{t('productDetail.personCount', { count: product.person })}</li>
            </ul>
          </div>

          <div className="reservation">
            <h2>{product[`name_${currentLang}`] || product.name_ko}</h2>
            <ul className="product-info">
              <li className="review">{product.reviewCount}</li>
              <li className="wish">{product.wishCount}</li>
              <li className="place">{t('productDetail.placeUnknown')}</li>
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
            <p className="notice">{t('productDetail.beforeApplyNotice')}</p>
            <div className="tags">
              {product.tag.map((tObj, idx) => (
                <span key={idx}>{tObj[`tag_${currentLang}`] || tObj.tag_ko}</span>
              ))}
            </div>
            <div className="person">
              <span>{t('productDetail.person')}</span>
              <button onClick={handleMinus}>-</button>
              <span className="personCount">{count}</span>
              <button onClick={handlePlus}>+</button>
            </div>
            <p className="price">
              {(product.price * count).toLocaleString()} {t('currencyWon')}
            </p>
            <div className="btns">
              <WishBtn product={product} iconType="gray" />
              <button className="faqBtn">{t('productDetail.faqButton')}</button>
              <button className="applyBtn">{t('productDetail.applyButton')}</button>
            </div>
          </div>
        </div>
      </section>

      <div className="detail-body">
        <div className="tab" ref={tabRef}>
          <nav className="tab-nav">
            <ul>
              <li
                className={activeTab === 'section1' ? 'active' : ''}
                onClick={() => scrollToSection('section1')}
              >
                {t('productDetail.tabs.intro')}
              </li>
              <li
                className={activeTab === 'section2' ? 'active' : ''}
                onClick={() => scrollToSection('section2')}
              >
                {t('productDetail.tabs.curriculum')}
              </li>
              <li
                className={activeTab === 'section3' ? 'active' : ''}
                onClick={() => scrollToSection('section3')}
              >
                {t('productDetail.tabs.tutor')}
              </li>
              <li
                className={activeTab === 'section4' ? 'active' : ''}
                onClick={() => scrollToSection('section4')}
              >
                {t('productDetail.tabs.reviews')}
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ height: '66px' }}></div>
        <Section1 ref={sectionRefs.section1} />
        <Section2 ref={sectionRefs.section2} />
        <Section3 ref={sectionRefs.section3} />
        <Section4 ref={sectionRefs.section4} />
      </div>
    </>
  );
};

export default ProductDetail;
