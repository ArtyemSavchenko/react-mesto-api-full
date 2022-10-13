import styles from './Spinner.module.css';

export default function Spinner({ text }) {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner__spinnerEl}>
        {text && <span className={styles.spinner__text}>{text}</span>}
      </div>
    </div>
  );
}
