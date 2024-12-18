import {JSX} from 'react';
import styles from './loading-spinner.module.css';

function LoadingSpinner(): JSX.Element {
  return (
    <div className={styles['spinner-wrapper']}>
      <div className={styles.spinner} />
    </div>
  );
}

export default LoadingSpinner;
