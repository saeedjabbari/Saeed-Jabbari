import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Automatic image path fallback when GitHub Pages serves the raw repository root (main branch)
if (typeof window !== 'undefined') {
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
