export const clamp = (input: number, min: number, max: number): number => {
  return input < min ? min : input > max ? max : input;
};

export const map = (
  current: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  const mapped =
    ((current - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  return clamp(mapped, outMin, outMax);
};
