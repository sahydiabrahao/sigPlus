
import Footer from '@/presentation/layout/footer/footer'
import Header from '@/presentation/layout/header/header'
import Hero from '@/presentation/pages/home/hero/hero'
import ShopTint from '@/presentation/pages/home/shop-tint/shop-tint'
import React from 'react'

export const MakeShopTint: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShopTint />
      <Footer />
    </>
  )
}
