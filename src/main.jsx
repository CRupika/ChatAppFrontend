import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import 'primereact/resources/themes/lara-light-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// import 'primeflex/primeflex.css';  
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';
import { ToastProvider } from './components/ui/Toast.jsx';
import { Provider } from "react-redux";
import store from './services/store/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PrimeReactProvider value={{ theme: Aura }}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </PrimeReactProvider>
    </Provider>
  </StrictMode>,
)
