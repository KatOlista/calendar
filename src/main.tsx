import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { App } from './App.tsx';
import { DateProvider, TodoProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DateProvider>
    <TodoProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TodoProvider>
  </DateProvider>,
)
