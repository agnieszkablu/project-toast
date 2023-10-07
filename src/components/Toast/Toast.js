import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Icon({ variant, as: Tag = ICONS_BY_VARIANT[variant], ...delegated }) {
  return <Tag {...delegated} />;
}

function Toast({ variant, id, deleteToast, children }) {
  return (
    <div id={id} className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon variant={variant} size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}-</VisuallyHidden>
        {children}
      </p>
      <button
        onClick={() => deleteToast(id)}
        className={styles.closeButton}
        aria-label='Dismiss message'
        aria-live='off'
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
