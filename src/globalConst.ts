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
};

export const BLACK_KEYS = [
  { keyName: '2', keyCode: 50, note: NOTES.Db3 },
  { keyName: '3', keyCode: 51, note: NOTES.Eb3 },
  { keyName: '5', keyCode: 53, note: NOTES.Gb3 },
  { keyName: '6', keyCode: 54, note: NOTES.Ab3 },
  { keyName: '7', keyCode: 55, note: NOTES.Bb3 },
  { keyName: '9', keyCode: 57, note: NOTES.Db4 },
  { keyName: '0', keyCode: 48, note: NOTES.Eb4 },
  { keyName: 'S', keyCode: 83, note: NOTES.Gb4 },
  { keyName: 'D', keyCode: 68, note: NOTES.Ab4 },
  { keyName: 'F', keyCode: 70, note: NOTES.Bb4 },
];

export const WHITE_KEYS = [
  { keyName: 'Q', keyCode: 81, note: NOTES.C3 },
  { keyName: 'W', keyCode: 87, note: NOTES.D3 },
  { keyName: 'E', keyCode: 69, note: NOTES.E3 },
  { keyName: 'R', keyCode: 82, note: NOTES.F3 },
  { keyName: 'T', keyCode: 84, note: NOTES.G3 },
  { keyName: 'Y', keyCode: 89, note: NOTES.A3 },
  { keyName: 'U', keyCode: 85, note: NOTES.B3 },
  { keyName: 'I', keyCode: 73, note: NOTES.C4 },
  { keyName: 'O', keyCode: 79, note: NOTES.D4 },
  { keyName: 'P', keyCode: 80, note: NOTES.E4 },
  { keyName: 'Z', keyCode: 90, note: NOTES.F4 },
  { keyName: 'X', keyCode: 88, note: NOTES.G4 },
  { keyName: 'C', keyCode: 67, note: NOTES.A4 },
  { keyName: 'V', keyCode: 86, note: NOTES.B4 },
  { keyName: 'B', keyCode: 66, note: NOTES.C5 },
];

export const context = new AudioContext();
export const pressedNotes = new Map<string, OscillatorNode>();
// export const masterVolume = context.createGain();
// export const oscillator = context.createOscillator();

// masterVolume.gain.value = 0.00001;

// oscillator.type = 'square';
// oscillator.frequency.setValueAtTime(0, context.currentTime);
// oscillator.start();

// masterVolume.connect(context.destination);
// oscillator.connect(masterVolume);
