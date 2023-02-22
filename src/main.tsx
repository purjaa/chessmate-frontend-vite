import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import './index.scss';
import './utils/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
