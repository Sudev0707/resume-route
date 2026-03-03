import { ToastType } from '../components/Toast';

// Global toast instance that will be set by the provider
let toastFunctions: {
  showToast: (message: string, type: ToastType) => void;
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showInfo: (message: string) => void;
} | null = null;

export const setToastFunctions = (
  functions: typeof toastFunctions
) => {
  toastFunctions = functions;
};

export const toast = {
  show: (message: string, type: ToastType = 'info') => {
    if (toastFunctions) {
      toastFunctions.showToast(message, type);
    } else {
      console.warn('Toast not initialized. Make sure ToastProvider is wrapping your app.');
    }
  },
  success: (message: string) => {
    if (toastFunctions) {
      toastFunctions.showSuccess(message);
    } else {
      console.warn('Toast not initialized. Make sure ToastProvider is wrapping your app.');
    }
  },
  error: (message: string) => {
    if (toastFunctions) {
      toastFunctions.showError(message);
    } else {
      console.warn('Toast not initialized. Make sure ToastProvider is wrapping your app.');
    }
  },
  info: (message: string) => {
    if (toastFunctions) {
      toastFunctions.showInfo(message);
    } else {
      console.warn('Toast not initialized. Make sure ToastProvider is wrapping your app.');
    }
  },
};

