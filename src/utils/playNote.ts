import { context, pressedNotes } from '../globalConst';
import { IControlsInitialState } from '../store/synthControlsSlice';
import { setAttack } from './setAttack';
import { setDecay } from './setDecay';
import { setRelease } from './setRelease';

export const playNote = (
  keyName: string,
  note: number,
  controls: IControlsInitialState,
  setIsPressed: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const oscillator = context.createOscillator();
  const osc2 = context.createOscillator();
  const noteGainNode = context.createGain();
  noteGainNode.connect(context.destination);

  setIsPressed(true);

  const startGain = controls.masterVolume;

  noteGainNode.gain.value = startGain;

  setAttack(noteGainNode, controls.attackGain, controls.attackTime);
  setDecay(noteGainNode, controls.decayVolume, controls.decayTime);
  setRelease(noteGainNode, controls.releaseLength);

  oscillator.type = controls.oscillatorType;
  oscillator.connect(noteGainNode);
  oscillator.frequency.setValueAtTime(note, 0);

  if (controls.oscillatorType2 !== undefined) {
    osc2.type = controls.oscillatorType2;
    osc2.connect(noteGainNode);
    osc2.frequency.setValueAtTime(note / 2, 0);
    pressedNotes.set(`${keyName}bass`, osc2);
    pressedNotes.get(`${keyName}bass`)?.start(0);
  }

  pressedNotes.set(keyName, oscillator);
  pressedNotes.get(keyName)?.start(0);
};
