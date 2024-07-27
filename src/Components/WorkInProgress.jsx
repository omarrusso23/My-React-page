import React from 'react';
import styles from './WorkInProgress.module.css';

const WorkInProgress = ({ onDismiss }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.message}>
          <h1>🚧 Work in Progress 🚧</h1>
          <p>This page is not fully finished you may look at it but keep in mind is not finished</p>
          <button className={styles.dismissButton} onClick={onDismiss}>
          See page
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
