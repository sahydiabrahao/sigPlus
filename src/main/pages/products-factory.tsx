
import Footer from '@/presentation/layout/footer/footer'
import Header from '@/presentation/layout/header/header'
import Product from '@/presentation/pages/products/product/product'
import React from 'react'

export const MakeProducts: React.FC = () => {
  return (
    <>
      <Header />
      <Product/>
      <Footer />
    </>
  )
}
