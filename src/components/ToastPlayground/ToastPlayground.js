import React from 'react';

import ToastShelf from '../ToastShelf';
import ToastProvider from '../ToastProvider';
import ToastForm from '../ToastForm';
import { ToastContext } from '../ToastProvider';
import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ToastProvider>
      <div className={styles.wrapper}>
        <header>
          <img alt='Cute toast mascot' src='/toast.png' />
          <h1>Toast Playground</h1>
        </header>
        <ToastForm />
      </div>
      {toasts && <ToastShelf />}
    </ToastProvider>
  );
}

export default ToastPlayground;
