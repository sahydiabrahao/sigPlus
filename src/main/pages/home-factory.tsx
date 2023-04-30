
import Footer from '@/presentation/layout/footer/footer'
import Header from '@/presentation/layout/header/header'
import Hero from '@/presentation/pages/home/hero/hero'
import Shop from '@/presentation/pages/home/shop/shop'
import React from 'react'

export const MakeHome: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Shop />
      <Footer />
    </>
  )
}
