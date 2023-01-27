import { pressedNotes } from '../globalConst';

export const stopPlay = (
  keyName: string,
  setIsPressed: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const oscillator = pressedNotes.get(keyName);
  if (oscillator) {
    setIsPressed(false);

    setTimeout(() => {
      oscillator.stop(0);
    }, 6000);
    pressedNotes.delete(keyName);
  }
};
