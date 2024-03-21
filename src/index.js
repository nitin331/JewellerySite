// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { CartProvider } from './Cart/CartContext';

ReactDOM.render(
  <React.StrictMode>
    
      <CartProvider>
        <App />
      </CartProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
