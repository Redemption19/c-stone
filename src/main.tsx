import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import emailjs from 'emailjs-com';

// Use the PUBLIC KEY here
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY!)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);