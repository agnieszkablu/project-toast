import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts, setToasts, handleDismissAll } =
    React.useContext(ToastContext);

  function deleteToast(index) {
    const nextToasts = [...toasts];
    nextToasts.splice(index, 1);
    setToasts(nextToasts);
  }
  
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        handleDismissAll();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismissAll]);

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast variant={toast.variant} deleteToast={deleteToast}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
