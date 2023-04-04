import App from "./routes/app";
import '@styles/global.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('app');

ReactDOM.createRoot(rootElement).render(<App />);

