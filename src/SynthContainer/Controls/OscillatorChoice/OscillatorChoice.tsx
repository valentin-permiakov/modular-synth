import React, { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from '../../../Dropdown';
import { useCoordinates } from '../../../hooks/useCoordinates';
import { EIcons, Icon } from '../../../icons';
import { RootState } from '../../../store/store';
import { changeOscillatorType } from '../../../store/synthControlsSlice';
import styles from './oscillator-choice.scss';
import { OscillatorList } from './OscillatorList/OscillatorList';

export const OscillatorChoice = () => {
  const oscillatorType = useSelector(
    (state: RootState) => state.synthControls.oscillatorType
  );
  const { btnRef, top, left } = useCoordinates(0, 370);
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();
  let osc: OscillatorType;

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.dataset.type) {
      switch (e.currentTarget.dataset.type) {
        case 'sine':
        case 'sawtooth':
        case 'square':
        case 'triangle':
          osc = e.currentTarget.dataset.type;
          break;
        default:
          osc = 'custom';
          break;
      }

      dispatch(changeOscillatorType(osc));
    }
    setIsOpened(false);
  };

  const handleHover = () => {
    setIsOpened(false);
  };
  return (
    <div className={`${styles.choiceBox} ${isOpened ? styles.reversed : ''}`}>
      <button
        className={styles.rangeBtn}
        onClick={() => setIsOpened(!isOpened)}
        ref={btnRef}
      >
        {oscillatorType.toUpperCase()}
        <Icon name={EIcons.dropdownIcon} />
      </button>
      {isOpened && (
        <Dropdown top={top} left={left}>
          <OscillatorList handleClick={handleClick} handleHover={handleHover} />
        </Dropdown>
      )}
    </div>
  );
};
