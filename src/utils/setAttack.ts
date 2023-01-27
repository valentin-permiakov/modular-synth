import { context } from '../globalConst';

export const setAttack = (
  noteGainNode: GainNode,
  attackGain: number,
  attackTime: number
) =>
  noteGainNode.gain.exponentialRampToValueAtTime(
    attackGain,
    context.currentTime + attackTime
  );
