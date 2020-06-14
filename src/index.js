import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { ScrollToTop } from '@Components/ScrollToTop';

import './index.scss';

const app = (
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
