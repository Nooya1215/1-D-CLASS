import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Sign from '../pages/Sign';
import ProductList from '../pages/ProductList';
import Faq from '../pages/Faq';
import WishListPage from '../pages/WishListPage';


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/review" element={<Review />} /> */}
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}
