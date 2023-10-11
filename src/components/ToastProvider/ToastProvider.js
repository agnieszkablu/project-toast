import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  function createToast(message, variant) {
    const newToast = {
      variant: variant,
      message: message,
      id: crypto.randomUUID(),
    };

    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
  }

  function deleteToast(index) {
    const nextToasts = [...toasts];
    nextToasts.splice(index, 1);
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        message,
        variant,
        setVariant,
        setMessage,
        createToast,
        deleteToast
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
