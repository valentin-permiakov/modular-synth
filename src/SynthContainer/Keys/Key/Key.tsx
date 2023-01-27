import React from 'react';
import styles from './key.scss';
import { context, pressedNotes } from '../../../globalConst';

interface IKeyProps {
  keyName: string;
  keyCode: number;
  note: number;
  isBlack: boolean;
}

export function Key({ keyName, keyCode, note, isBlack }: IKeyProps) {
  const playNote = () => {
    const oscillator = context.createOscillator();
    const noteGainNode = context.createGain();
    noteGainNode.connect(context.destination);

    const zeroGain = 0.00001;
    const maxGain = 0.5;
    const sustainedGain = 0.001;

    noteGainNode.gain.value = zeroGain;

    const setAttack = () =>
      noteGainNode.gain.exponentialRampToValueAtTime(
        maxGain,
        context.currentTime + 0.01
      );
    const setDecay = () =>
      noteGainNode.gain.exponentialRampToValueAtTime(
        sustainedGain,
        context.currentTime + 1
      );
    const setRelease = () =>
      noteGainNode.gain.exponentialRampToValueAtTime(
        zeroGain,
        context.currentTime + 2
      );

    setAttack();
    setDecay();
    setRelease();

    oscillator.type = 'triangle';
    oscillator.connect(noteGainNode);
    oscillator.frequency.setValueAtTime(note, 0);

    pressedNotes.set(keyName, oscillator);
    pressedNotes.get(keyName)?.start(0);
  };

  const stopPlay = () => {
    const oscillator = pressedNotes.get(keyName);
    if (oscillator) {
      setTimeout(() => {
        oscillator.stop(0);
      }, 2000);
      pressedNotes.delete(keyName);
    }
  };

  const handleKeyDown = (e: { keyCode: number; key: string }) => {
    const eventKey = e.key.toUpperCase();

    if (!eventKey || pressedNotes.get(eventKey)) return;
    if (e.keyCode === keyCode) playNote();
  };
  const handleKeyUp = (e: { keyCode: number }) => {
    if (!e.keyCode) return;
    if (e.keyCode === keyCode) stopPlay();
  };

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  return (
    <div
      onMouseDown={playNote}
      onMouseUp={stopPlay}
      className={isBlack ? styles.blackKey : styles.whiteKey}
    >
      {keyName}
    </div>
  );
}
