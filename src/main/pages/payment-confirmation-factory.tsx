
import Footer from '@/presentation/layout/footer/footer'
import Header from '@/presentation/layout/header/header'
import Confirmation from '@/presentation/pages/payment/confirmation/confirmation'
import React from 'react'

export const MakePaymentConfirmation: React.FC = () => {
  return (
    <>
      <Header />
      <Confirmation/>
      <Footer />
    </>
  )
}
