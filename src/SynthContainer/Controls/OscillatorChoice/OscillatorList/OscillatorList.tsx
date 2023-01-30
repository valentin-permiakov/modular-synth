import React, { MouseEvent } from 'react';
import { EIcons, Icon } from '../../../../icons';
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
        <span>Sine</span>
        <Icon name={EIcons.sineIcon} size={32} />
      </li>
      <li
        className={styles.rangeItem}
        data-type="sawtooth"
        onClick={handleClick}
      >
        <span>Sawtooth</span>
        <Icon name={EIcons.sawtoothIcon} size={32} />
      </li>
      <li className={styles.rangeItem} data-type="square" onClick={handleClick}>
        <span>Square</span>
        <Icon name={EIcons.squareIcon} size={32} />
      </li>
      <li
        className={styles.rangeItem}
        data-type="triangle"
        onClick={handleClick}
      >
        <span>Triangle</span>
        <Icon name={EIcons.triangleIcon} size={32} />
      </li>
    </ul>
  );
};
