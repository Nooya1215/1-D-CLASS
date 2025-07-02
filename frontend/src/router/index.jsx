import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import Login from '../pages/Login';
import Sign from '../pages/Sign';
import Mypage from '../pages/Mypage';
import ProductList from '../pages/ProductList';
import WishListPage from '../pages/WishListPage';
import Faq from '../pages/Faq';
import FaqMobile from "../components/FaqMobile";
import SearchMobile from "../components/SearchMobile";
import ProductDetail from '../pages/ProductDetail';

// ✅ 언어 코드별 내부 라우팅
function LanguageRoutes() {
  const { lang } = useParams();

  // 허용 언어 코드
  const supportedLangs = ['ko', 'en'];
  if (!supportedLangs.includes(lang)) {
    return <Navigate to="/ko" replace />;
  }
  // 모바일 전환
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="login" element={<Login />} />
      <Route path="sign" element={<Sign />} />
      <Route path="mypage" element={<Mypage />} />
      <Route path="products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
      <Route path="wishlist" element={<WishListPage />} />
      <Route path="/faq" element={isMobile ? <FaqMobile /> : <Faq />} />
      <Route path="/search-mobile" element={<SearchMobile />} />
    </Routes>
  );
}

// ✅ 최상위 라우터
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ko" replace />} />
      <Route path=":lang/*" element={<LanguageRoutes />} />
      <Route path="*" element={<Navigate to="/ko" replace />} />
    </Routes>
  );
}
