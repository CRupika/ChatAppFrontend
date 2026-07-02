import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';              
import 'primeicons/primeicons.css';                      
// import 'primeflex/primeflex.css';  
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider value={{ theme: Aura }}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
