import React, { createContext, useContext, useRef } from 'react';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';              
import 'primeicons/primeicons.css';                             

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const toastRef = useRef(null); 
  const showToast = (severity, summary, detail) => {
    if (toastRef.current) {
      toastRef.current.show({
        severity,
        summary,
        detail,
        life:3000, 
      });
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={toastRef} />
      {children} 
    </ToastContext.Provider>
  );
};
