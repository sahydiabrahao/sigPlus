import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { MakeHome, MakePaymentAuthentication, MakeProducts, MakeShopDesign, MakeShopTint } from '../pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeHome />} />
        <Route path="/design" element={<MakeShopDesign />} />
        <Route path="/tint" element={<MakeShopTint/>} />
        <Route path="/products" element={<MakeProducts />} />
        <Route path="/payment-account" element={<MakePaymentAuthentication />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
