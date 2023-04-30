import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { MakeHome } from '../pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
