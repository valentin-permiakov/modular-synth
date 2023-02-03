import React, { useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown } from '../../../Dropdown';
import { useCoordinates } from '../../../hooks/useCoordinates';
import { EIcons, Icon } from '../../../icons';
import {
  changeOscillatorType,
  changeOscillatorType2,
} from '../../../store/synthControlsSlice';
import { OscillatorList } from './OscillatorList/OscillatorList';
import styles from './oscillator-choice.scss';

interface IOscillatorChoiceProps {
  isBass?: boolean;
  oscillatorType: OscillatorType | undefined;
}

export const OscillatorChoice = ({
  isBass = false,
  oscillatorType,
}: IOscillatorChoiceProps) => {
  const { btnRef, top, left } = useCoordinates(0, 190);
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();
  let osc: OscillatorType;
  let bassOsc: OscillatorType | undefined;

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.dataset.type) {
      switch (e.currentTarget.dataset.type) {
        case 'sine':
        case 'sawtooth':
        case 'square':
        case 'triangle':
          osc = e.currentTarget.dataset.type;
          bassOsc = e.currentTarget.dataset.type;
          break;
        default:
          osc = 'sine';
          bassOsc = undefined;
          break;
      }
      if (isBass) {
        dispatch(changeOscillatorType2(bassOsc));
      } else {
        dispatch(changeOscillatorType(osc));
      }
    }
    setIsOpened(false);
  };

  const handleHover = () => {
    setIsOpened(false);
  };
  return (
    <div className={`${styles.choiceBox} `}>
      <span className={styles.groupName}>{!isBass ? 'OSC1' : 'BASS OSC'}</span>
      <button
        className={`${styles.rangeBtn} ${isOpened ? styles.reversed : ''}`}
        onClick={() => setIsOpened(!isOpened)}
        ref={btnRef}
      >
        {oscillatorType}
        <Icon name={EIcons.dropdownIcon} />
      </button>
      {isOpened && (
        <Dropdown top={top} left={left}>
          <OscillatorList
            isBass={isBass}
            handleClick={handleClick}
            handleHover={handleHover}
          />
        </Dropdown>
      )}
    </div>
  );
};
