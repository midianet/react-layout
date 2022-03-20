import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Base from './generic/elements/Base';
import Reset from "./generic/styles/Reset"

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
