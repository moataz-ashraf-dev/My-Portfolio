import React from 'react';
import { createRoot } from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.jsx';
import './styles.css';

AOS.init({
  duration: 800,
  // once: true
  easing: 'ease-in-out',
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>,
);
