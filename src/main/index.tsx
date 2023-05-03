import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/main/routes/router'
import { Provider } from 'react-redux'
import store from '@/presentation/hooks/store'
import ModalCart from '@/presentation/layout/modal-cart/modal-cart'

ReactDOM.render(
  <>
    <Provider store={store}>
      <ModalCart />
      <Router />
    </Provider>
  </>,
  document.getElementById('main')
)
