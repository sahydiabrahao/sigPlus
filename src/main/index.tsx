import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/main/routes/router'
import { Provider } from 'react-redux'
import store from '@/presentation/hooks/store'

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router />
    </Provider>
  </>,
  document.getElementById('main')
)
