import React from 'react';
import Title from '../components/Title';
import Category from '../components/Category';
import New from '../components/New';
import Review from '../components/Review';
import Best from '../components/Best';

export default function Home() {
  return (
    <>
      <Title />
      <Category />
      <New />
      <Review />
      <Best />
    </>
  );
}
