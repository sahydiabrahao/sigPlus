
import Footer from '@/presentation/layout/footer/footer'
import Header from '@/presentation/layout/header/header'
import Authentication from '@/presentation/pages/payment/authentication/authentication'
import React from 'react'

export const MakePaymentAuthentication: React.FC = () => {
  return (
    <>
      <Header />
      <Authentication/>
      <Footer />
    </>
  )
}
