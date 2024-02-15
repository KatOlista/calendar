import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { App } from './App.tsx';
import { DateProvider } from './context/DateContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DateProvider>,
)
