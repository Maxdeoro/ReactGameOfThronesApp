import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ReactDOM } from 'react';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);