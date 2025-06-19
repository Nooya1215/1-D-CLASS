import React, { useState } from 'react';
import productList from '../data/products.json'; // 예시
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar'; // npm install react-calendar
import 'react-calendar/dist/Calendar.css';
import '../assets/css/productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productList.find((item) => item.id === parseInt(id));
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [count, setCount] = useState(1);

  const handleDateChange = (date) => {
    const formatted = date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
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
    <section id="detailTitle">
        <div className="wrap">
            {/* 이미지 */}
            <div className="img">
                <img src={product.mainImg} alt={product.name}/>
            </div>

            {/* 정보 */}
            <div className="info">
                <ul>
                    <li>{product.category}</li>
                    <li>{product.duration}</li>
                    <li>{product.level}</li>
                    <li>1~{product.person}명</li>
                </ul>
            </div>

            {/* 예약 */}
            <div className="reservation">
                <h2>{product.name}</h2>
                <ul className="product-info">
                    <li className='review'>{product.reviewCount}</li>
                    <li className='wish'>{product.wishCount}</li>
                    <li className='place'>정보없음</li>
                </ul>

                {/* 날짜 선택 */}
                <div className='date'>
                    <button
                        onClick={() => setShowCalendar(!showCalendar)}
                    >
                        날짜 선택
                    </button>
                    {showCalendar && (
                        <div>
                            <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            formatDay={(locale, date) => date.getDate()}
                            tileClassName={({ date }) => date.getDay() === 6 ? 'saturday' : null}
                            />
                        </div>
                    )}
                    {selectedDate && (
                        <p>선택한 날짜: {selectedDate}</p>
                    )}
                </div>

                <p className='notice'>※ 클래스 신청 전, 확인해주세요!</p>

                {/* 태그 */}
                <div className='tags'>
                {product.tag.map((t, idx) => (
                    <span key={idx}>{t}</span>
                ))}
                </div>

                {/* 인원 선택 */}
                <div className='person'>
                    <button onClick={handleMinus}>
                        -
                    </button>
                    <span>{count}명</span>
                    <button onClick={handlePlus}>
                        +
                    </button>
                </div>

                {/* 가격 */}
                <p className='price'>{((product.price)*(count)).toLocaleString()}원</p>

                {/* 버튼들 */}
                <div className='btns'>
                <button>찜하기</button>
                <button>문의하기</button>
                <button>클래스 신청하기</button>
                </div>
            </div>
        </div>
    </section>
  );
  
};

export default ProductDetail;
