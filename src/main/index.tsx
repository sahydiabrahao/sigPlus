import React from 'react';
import ReactDOM from 'react-dom';
import Router from '@/main/routes/router';
import { Provider } from 'react-redux';
import persistor, { store } from '@/presentation/hooks/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById('main')
);
