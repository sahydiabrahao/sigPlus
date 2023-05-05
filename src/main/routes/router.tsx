import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { MakeHome, MakePaymentAuthentication, MakePaymentConfirmation, MakePaymentInformation, MakeProducts, MakeShopDesign, MakeShopTint } from '../pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeHome />} />
        <Route path="/design" element={<MakeShopDesign />} />
        <Route path="/tint" element={<MakeShopTint/>} />
        <Route path="/products" element={<MakeProducts />} />
        <Route path="/payment-account" element={<MakePaymentAuthentication />} />
        <Route path="/payment-information" element={<MakePaymentInformation />} />
        <Route path="/payment-confirmation" element={<MakePaymentConfirmation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
