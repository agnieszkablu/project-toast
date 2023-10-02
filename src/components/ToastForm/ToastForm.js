import React from 'react';
import Button from '../Button';
import styles from './ToastForm.module.css';

import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastForm() {
  const { toasts, message, variant, setToasts, setMessage, setVariant } =
    React.useContext(ToastContext);

  return (
    <form
      className={styles.controlsWrapper}
      onSubmit={(event) => {
        event.preventDefault();

        const newToast = {
          variant: variant,
          message: message,
          id: crypto.randomUUID(),
        };

        const nextToasts = [...toasts, newToast];
        setToasts(nextToasts);
      }}
    >
      <div className={styles.row}>
        <label
          htmlFor='message'
          className={styles.label}
          style={{ alignSelf: 'baseline' }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            id='message'
            className={styles.messageInput}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          {VARIANT_OPTIONS.map((name) => {
            return (
              <label key={`variant-${name}`} htmlFor={`variant-${name}`}>
                <input
                  id={`variant-${name}`}
                  type='radio'
                  name='variant'
                  value={name}
                  onChange={(event) => {
                    setVariant(event.target.value);
                  }}
                  checked={variant === name}
                />
                {name}
              </label>
            );
          })}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

export default ToastForm;
