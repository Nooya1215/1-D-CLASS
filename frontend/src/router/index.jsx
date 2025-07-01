import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Sign from '../pages/Sign';
import Mypage from '../pages/Mypage';
import ProductList from '../pages/ProductList';
import WishListPage from '../pages/WishListPage';
import Faq from '../pages/Faq';


// ✅ 언어 코드별 내부 라우팅
function LanguageRoutes() {
  const { lang } = useParams();

  // 허용 언어 코드
  const supportedLangs = ['ko', 'en'];
  if (!supportedLangs.includes(lang)) {
    return <Navigate to="/ko" replace />;
  }

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="sign" element={<Sign />} />
      <Route path="mypage" element={<Mypage />} />
      <Route path="products/:category" element={<ProductList />} />
      <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
      <Route path="wishlist" element={<WishListPage />} />
      <Route path="faq" element={<Faq />} />
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
