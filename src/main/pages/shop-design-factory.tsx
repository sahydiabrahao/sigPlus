
import Footer from '@/presentation/layout/footer/footer'
import Header from '@/presentation/layout/header/header'
import Hero from '@/presentation/pages/home/hero/hero'
import ShopDesign from '@/presentation/pages/home/shop-design/shop-design'
import React from 'react'

export const MakeShopDesign: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShopDesign />
      <Footer />
    </>
  )
}
