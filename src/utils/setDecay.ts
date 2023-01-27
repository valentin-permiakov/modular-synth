import { context } from '../globalConst';

export const setDecay = (
  noteGainNode: GainNode,
  decayVolume: number,
  decayTime: number
) =>
  noteGainNode.gain.exponentialRampToValueAtTime(
    decayVolume,
    context.currentTime + decayTime
  );
