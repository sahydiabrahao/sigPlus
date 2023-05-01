import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { MakeHome, MakeProducts } from '../pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeHome />} />
        <Route path="/products" element={<MakeProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
