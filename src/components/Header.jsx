import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/header.css";

export default function Header() {
  return (
    <header>
      <div className='wrap'>
        <h1 className="h1">1:D CLASS</h1>
        <form method="get" action="/search">
          <input type="search" name="search" id="search" />
          <button type="submit"></button>
        </form>
        <ul className='gnb'>
          <li><Link to="">찜</Link></li>
          <li><Link to="">로그인</Link></li>
          <li><a href="">언어</a></li>
          <li><a href="">다크모드</a></li>
          <li><a href="">메뉴</a></li>
        </ul>
      </div>
    </header>
  );
}