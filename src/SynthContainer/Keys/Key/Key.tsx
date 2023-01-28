import React, { useState } from 'react';
import styles from './key.scss';
import { pressedNotes } from '../../../globalConst';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../../store/store';
import { playNote } from '../../../utils/playNote';
import { stopPlay } from '../../../utils/stopPlay';

interface IKeyProps {
  keyName: string;
  keyCode: string;
  note: number;
  isBlack: boolean;
}

export const Key = ({ keyName, keyCode, note, isBlack }: IKeyProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const controls = useSelector((state: RootState) => state.synthControls);

  const handleKeyDown = (e: KeyboardEvent) => {
    const eventKey = e.key.toUpperCase();
    const synthControls = store.getState().synthControls;

    if (!eventKey || pressedNotes.get(eventKey)) return;
    if (e.code === keyCode)
      playNote(keyName, note, synthControls, setIsPressed);
  };
  const handleKeyUp = (e: KeyboardEvent) => {
    if (!e.code) return;
    if (e.code === keyCode) stopPlay(keyName, setIsPressed);
  };

  document.addEventListener('keydown', (e) => {
    handleKeyDown(e);
    if (e.code === keyCode) setIsPressed(true);
  });
  document.addEventListener('keyup', (e) => {
    handleKeyUp(e);
    setIsPressed(false);
  });

  return (
    <div
      onMouseDown={() => playNote(keyName, note, controls, setIsPressed)}
      onMouseUp={() => stopPlay(keyName, setIsPressed)}
      className={`${isBlack ? styles.blackKey : styles.whiteKey} ${
        isPressed ? styles.pressed : ''
      }`}
    >
      {keyName}
    </div>
  );
};
