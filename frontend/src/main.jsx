import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WishProvider } from './context/WishContext';
import './lang/i18n'; //언어추가

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishProvider>
      <App />
    </WishProvider>
  </StrictMode>,
)
