import React, { MouseEvent } from 'react';
import styles from './oscillator-list.scss';

interface IOscillatorList {
  handleClick: (e: MouseEvent<HTMLLIElement>) => void;
  handleHover: () => void;
}

export const OscillatorList = ({
  handleClick,
  handleHover,
}: IOscillatorList) => {
  return (
    <ul className={styles.rangeList} onMouseLeave={handleHover}>
      <li className={styles.rangeItem} data-type="sine" onClick={handleClick}>
        Sine
      </li>
      <li
        className={styles.rangeItem}
        data-type="sawtooth"
        onClick={handleClick}
      >
        Sawtooth
      </li>
      <li className={styles.rangeItem} data-type="square" onClick={handleClick}>
        Square
      </li>
      <li
        className={styles.rangeItem}
        data-type="triangle"
        onClick={handleClick}
      >
        Triangle
      </li>
    </ul>
  );
};
