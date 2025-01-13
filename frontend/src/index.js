import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Import custom CSS (or Tailwind if used)

// Create the root for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);