import { AnyAction } from '@reduxjs/toolkit';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { changeAttackTime } from '../../../store/synthControlsSlice';
import { calculateDegree } from '../../../utils/calculateDegree';
import { map } from '../../../utils/mapRange';
import styles from './knob.scss';

interface IKnobProps {
  changeState: (payload: number) => AnyAction;
  name: string;
  outMin: number;
  outMax: number;
  state: number;
}

export const Knob = ({
  changeState,
  name,
  outMin,
  outMax,
  state,
}: IKnobProps) => {
  const knobRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const rotate = (e: MouseEvent) => {
    const result = Math.floor(calculateDegree(e) - 90);

    if (knobRef.current)
      knobRef.current.style.transform = `rotate(${result}deg)`;

    const range = map(result, -129, 90, outMin, outMax);

    dispatch(changeState(range));
  };

  return (
    <div className={styles.controlContainer}>
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
        />
      </div>
      <span className={styles.controlName}>{name}</span>
      <span className={styles.result}>{state.toFixed(1)}</span>
    </div>
  );
};
