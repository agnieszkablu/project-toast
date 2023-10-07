import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  function handleDismissAll() {
    return setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        toasts,
        setToasts,
        handleDismissAll
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
