import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router';
import Chatbot from "./components/Chatbot";

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Chatbot />
      <Footer />
    </BrowserRouter>
  );
}