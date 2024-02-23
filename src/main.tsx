import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { App } from './App.tsx';
import { DateProvider, TodoProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DateProvider>
      <TodoProvider>
          <App />
      </TodoProvider>
    </DateProvider>
  </React.StrictMode>, 
)
