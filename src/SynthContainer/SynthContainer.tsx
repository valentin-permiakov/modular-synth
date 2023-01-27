import React from 'react';
import { Controls } from './Controls';
import { Keys } from './Keys';
import styles from './synth-container.scss';

export const SynthContainer = () => {
  return (
    <section className={styles.container}>
      <Controls />
      <Keys />
    </section>
  );
};
