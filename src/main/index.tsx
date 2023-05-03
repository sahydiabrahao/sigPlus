import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/main/routes/router'
import { Provider } from 'react-redux'
import persistor, { store } from '@/presentation/hooks/store'
import ModalCart from '@/presentation/layout/modal-cart/modal-cart'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalCart />
        <Router />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById('main')
)
