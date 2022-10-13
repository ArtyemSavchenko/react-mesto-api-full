import { useEffect, useState } from 'react';
import styles from './Notification.module.css';

const Notification = ({ id, type, heading, text, onClose, delayClose }) => {
  const [state, setState] = useState('');

  const closeNotification = () => {
    setState('close');
    setTimeout(() => {
      onClose(id);
    }, 1500);
  };

  const handlerBtnCloseClick = () => {
    closeNotification();
  };

  useEffect(() => {
    setState('open');
    if (delayClose > 0) {
      setTimeout(() => {
        closeNotification();
      }, delayClose);
    }
  }, []);

  return (
    <div
      className={`${styles.notification} ${
        type === 'success' ? styles.notification_type_success : ''
      }${type === 'error' ? styles.notification_type_error : ''} ${
        state === 'open' ? styles.notification_state_open : ''
      }${state === 'close' ? styles.notification_state_close : ''}
      `}
    >
      <div>
        <p className={styles.notification__heading}>{heading}</p>
        <p className={styles.notification__text}>{text}</p>
      </div>
      <button
        type="button"
        className={styles.notification__btnClose}
        onClick={handlerBtnCloseClick}
        aria-label="Закрыть уведомление"
      />
    </div>
  );
};
export default Notification;
