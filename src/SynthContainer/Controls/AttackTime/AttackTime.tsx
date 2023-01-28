import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeAttackTime } from '../../../store/synthControlsSlice';
import { calculateDegree } from '../../../utils/calculateDegree';
import { map } from '../../../utils/mapRange';
import styles from './attack-time.scss';

export const AttackTime = () => {
  const knobRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const rotate = (e: MouseEvent) => {
    const result = Math.floor(calculateDegree(e) - 90);

    if (knobRef.current)
      knobRef.current.style.transform = `rotate(${result}deg)`;

    const range = map(result, -129, 90, 0.1, 1);

    dispatch(changeAttackTime(range));
  };
  return (
    <div className={styles.knobContainer}>
      <div
        className={styles.knob}
        onMouseDown={() => {
          window.addEventListener('mousemove', rotate);
          window.addEventListener('mouseup', () => {
            window.removeEventListener('mousemove', rotate);
          });
        }}
        ref={knobRef}
      ></div>
    </div>
  );
};
