import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import lorem from './lorem.json';

ReactDOM.render(
  <React.StrictMode>
    <App lorem={lorem.lorem} />
  </React.StrictMode>,
  document.getElementById('root')
);
