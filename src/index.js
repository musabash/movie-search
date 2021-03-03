import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import { AllContextProvider } from './AllContext';

ReactDOM.render(
  <AllContextProvider>
    <Router>
      <App />
    </Router>
  </AllContextProvider>,
  document.getElementById('root')
);

