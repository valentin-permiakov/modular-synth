import React from 'react';
import { AttackTime } from './AttackTime';
import styles from './controls.scss';

export const Controls = () => {
  return (
    <div className={styles.controlsContainer}>
      <AttackTime />
    </div>
  );
};
