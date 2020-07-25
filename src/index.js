import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import ProductContextProvider from './context/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <Router>
        <App />
      </Router>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
