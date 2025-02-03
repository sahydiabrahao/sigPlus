import Footer from '@/presentation/layout/footer/footer';
import Header from '@/presentation/layout/header/header';
import Home from '@/presentation/pages/home/home';
import React from 'react';

export const MakeHome: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
