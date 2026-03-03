import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { Toast, ToastType } from '../components/Toast';
import { setToastFunctions } from '../utils/toast';

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showInfo: (message: string) => void;
}

interface ToastState {
  visible: boolean;
  message: string;
  type: ToastType;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastState, setToastState] = useState<ToastState>({
    visible: false,
    message: '',
    type: 'info',
  });

  const showToast = useCallback((message: string, type: ToastType) => {
    setToastState({
      visible: true,
      message,
      type,
    });
  }, []);

  const showSuccess = useCallback((message: string) => {
    showToast(message, 'success');
  }, [showToast]);

  const showError = useCallback((message: string) => {
    showToast(message, 'error');
  }, [showToast]);

  const showInfo = useCallback((message: string) => {
    showToast(message, 'info');
  }, [showToast]);

  const hideToast = useCallback(() => {
    setToastState(prev => ({
      ...prev,
      visible: false,
    }));
  }, []);

  // Register toast functions globally
  useEffect(() => {
    setToastFunctions({
      showToast,
      showSuccess,
      showError,
      showInfo,
    });
  }, [showToast, showSuccess, showError, showInfo]);

  return (
    <ToastContext.Provider value={{ showToast, showSuccess, showError, showInfo }}>
      {children}
      <Toast
        message={toastState.message}
        type={toastState.type}
        visible={toastState.visible}
        onHide={hideToast}
      />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

