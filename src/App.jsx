import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}