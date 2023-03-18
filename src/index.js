import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelpCard } from './HelpCard';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <App/>
 <HelpCard/>
  </React.StrictMode>
);

