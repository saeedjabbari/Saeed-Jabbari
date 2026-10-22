import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Flag that Vite or direct module entry point loaded successfully
if (typeof window !== 'undefined') {
  (window as unknown as { __VITE_LOADED__?: boolean }).__VITE_LOADED__ = true;
  window.addEventListener(
    'error',
    (event) => {
      const target = event.target as HTMLImageElement | null;
      if (
        target &&
        target.tagName === 'IMG' &&
        target.src &&
        target.src.includes('/assets/') &&
        !target.src.includes('/public/assets/')
      ) {
        target.src = target.src.replace('/assets/', '/public/assets/');
      }
    },
    true
  );
}

createRoot(document.getElementById('root')!).render(<App />);
