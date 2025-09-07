import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastProvider } from './components/feedback';
import './styles/main.scss';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider defaultPosition="top-right" maxToasts={5}>
      <App />
    </ToastProvider>
  </StrictMode>
);
