import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [isToastOpen, setIsToastOpen] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {isToastOpen && message && (
        <Toast message={message} variant={variant} setIsToastOpen={setIsToastOpen} />
      )}

      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
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
            <Button onClick={() => setIsToastOpen(true)}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
