import React from 'react';
import {
  changeAttackGain,
  changeAttackTime,
  changeDecayTime,
  changeDecayVolume,
  changeReleaseLength,
} from '../../store/synthControlsSlice';
import { Knob } from './Knob';
import styles from './controls.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { OscillatorChoice } from './OscillatorChoice/OscillatorChoice';

export const Controls = () => {
  const state = useSelector((state: RootState) => state.synthControls);

  return (
    <div className={styles.controlsContainer}>
      <div className={styles.knobContainer}>
        <div className={styles.controlGroup}>
          <Knob
            changeState={changeAttackTime}
            name="Attack Time"
            outMin={0.1}
            outMax={1}
            state={state.attackTime}
          />
          <Knob
            changeState={changeAttackGain}
            name="Attack Gain"
            outMin={0.1}
            outMax={2}
            state={state.attackGain}
          />
          <span className={styles.groupName}>Attack</span>
        </div>
        <div className={styles.controlGroup}>
          <Knob
            changeState={changeDecayTime}
            name="Decay Time"
            outMin={0.1}
            outMax={2}
            state={state.decayTime}
          />
          <Knob
            changeState={changeDecayVolume}
            name="Decay Volume"
            outMin={0.1}
            outMax={1.5}
            state={state.decayVolume}
          />
          <span className={styles.groupName}>Decay</span>
        </div>
        <div className={styles.controlGroup}>
          <Knob
            changeState={changeReleaseLength}
            name="Release Length"
            outMin={0.5}
            outMax={5}
            state={state.releaseLength}
          />
          <span className={styles.groupName}>Release</span>
        </div>
      </div>
      <OscillatorChoice oscillatorType={state.oscillatorType} />
      <OscillatorChoice isBass oscillatorType={state.oscillatorType2} />
    </div>
  );
};
