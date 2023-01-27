import React from 'react';
import styles from './keys.scss';
import { Key } from './Key/Key';
import { BLACK_KEYS, WHITE_KEYS } from '../../globalConst';

export function Keys() {
  return (
    <div className={styles.keysContainer}>
      <div className={styles.whiteKeys}>
        {WHITE_KEYS.map((key) => (
          <Key
            keyCode={key.code}
            keyName={key.keyName}
            note={key.note}
            key={key.code}
            isBlack={false}
          />
        ))}
      </div>
      <div className={styles.blackKeys}>
        {BLACK_KEYS.map((key) => (
          <Key
            keyCode={key.code}
            keyName={key.keyName}
            note={key.note}
            key={key.code}
            isBlack={true}
          />
        ))}
      </div>
    </div>
  );
}
