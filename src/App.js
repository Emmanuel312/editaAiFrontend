import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './config/reactotronConfig';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './store';
import history from '~/services/history';
import GlobalStyles from '~/styles/global';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyles />
          <Routes />
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}
