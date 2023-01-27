const AudioContext = window.AudioContext;
export const NOTES = {
  C3: 130.81,
  Db3: 138.59,
  D3: 146.83,
  Eb3: 155.56,
  E3: 164.81,
  F3: 174.61,
  Gb3: 185.0,
  G3: 196.0,
  Ab3: 207.65,
  A3: 220.0,
  Bb3: 233.08,
  B3: 246.94,
  C4: 261.63,
  Db4: 277.18,
  D4: 293.66,
  Eb4: 311.13,
  E4: 329.63,
  F4: 349.23,
  Gb4: 369.99,
  G4: 392.0,
  Ab4: 415.3,
  A4: 440,
  Bb4: 466.16,
  B4: 493.88,
  C5: 523.25,
  Db5: 554.37,
  D5: 587.33,
  Eb5: 622.25,
  E5: 659.25,
};

export const BLACK_KEYS = [
  { keyName: '2', code: 'Digit2', note: NOTES.Db3 },
  { keyName: '3', code: 'Digit3', note: NOTES.Eb3 },
  { keyName: '5', code: 'Digit5', note: NOTES.Gb3 },
  { keyName: '6', code: 'Digit6', note: NOTES.Ab3 },
  { keyName: '7', code: 'Digit7', note: NOTES.Bb3 },
  { keyName: '9', code: 'Digit9', note: NOTES.Db4 },
  { keyName: '0', code: 'Digit0', note: NOTES.Eb4 },
  { keyName: 'S', code: 'KeyS', note: NOTES.Gb4 },
  { keyName: 'D', code: 'KeyD', note: NOTES.Ab4 },
  { keyName: 'F', code: 'KeyF', note: NOTES.Bb4 },
  { keyName: 'H', code: 'KeyH', note: NOTES.Db5 },
  { keyName: 'J', code: 'KeyJ', note: NOTES.Eb5 },
];

export const WHITE_KEYS = [
  { keyName: 'Q', code: 'KeyQ', note: NOTES.C3 },
  { keyName: 'W', code: 'KeyW', note: NOTES.D3 },
  { keyName: 'E', code: 'KeyE', note: NOTES.E3 },
  { keyName: 'R', code: 'KeyR', note: NOTES.F3 },
  { keyName: 'T', code: 'KeyT', note: NOTES.G3 },
  { keyName: 'Y', code: 'KeyY', note: NOTES.A3 },
  { keyName: 'U', code: 'KeyU', note: NOTES.B3 },
  { keyName: 'I', code: 'KeyI', note: NOTES.C4 },
  { keyName: 'O', code: 'KeyO', note: NOTES.D4 },
  { keyName: 'P', code: 'KeyP', note: NOTES.E4 },
  { keyName: 'Z', code: 'KeyZ', note: NOTES.F4 },
  { keyName: 'X', code: 'KeyX', note: NOTES.G4 },
  { keyName: 'C', code: 'KeyC', note: NOTES.A4 },
  { keyName: 'V', code: 'KeyV', note: NOTES.B4 },
  { keyName: 'B', code: 'KeyB', note: NOTES.C5 },
  { keyName: 'N', code: 'KeyN', note: NOTES.D5 },
  { keyName: 'M', code: 'KeyM', note: NOTES.E5 },
];

export const context = new AudioContext();
export const pressedNotes = new Map<string, OscillatorNode>();
