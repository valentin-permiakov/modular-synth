import { context } from '../globalConst';

export const setRelease = (noteGainNode: GainNode, length: number) =>
  noteGainNode.gain.exponentialRampToValueAtTime(
    0.00001,
    context.currentTime + length
  );
