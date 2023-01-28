import React from 'react';
import styles from './keys.scss';
import { Key } from './Key/Key';
import { KEYS } from '../../globalConst';

export const Keys = () => {
  return (
    <div className={styles.keysContainer}>
      {KEYS.map((key) => (
        <Key
          keyCode={key.code}
          keyName={key.keyName}
          note={key.note}
          key={key.code}
          isBlack={key.isBlack}
        />
      ))}
    </div>
  );
};
