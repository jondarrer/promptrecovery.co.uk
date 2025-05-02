import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function setupSEO() {
  document.title = 'Prompt Recovery Ltd | Rapid Response, Prompt Recovery';

  const canonicalLink = document.createElement('link');
  canonicalLink.rel = 'canonical';
  canonicalLink.href = 'https://promptrecovery.co.uk';
  document.head.appendChild(canonicalLink);
}

setupSEO();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
