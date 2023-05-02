
import Footer from '@/presentation/layout/footer/footer'
import Header from '@/presentation/layout/header/header'
import Account from '@/presentation/pages/payment/account/account'
import Product from '@/presentation/pages/products/product/product'
import React from 'react'

export const MakePaymentAccount: React.FC = () => {
  return (
    <>
      <Header />
      <Account/>
      <Footer />
    </>
  )
}
