import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IControlsInitialState {
  masterVolume: number;
  oscillatorType: OscillatorType;
  oscillatorType2?: OscillatorType;
  attackGain: number;
  attackTime: number;
  releaseLength: number;
  decayTime: number;
  decayVolume: number;
}

export const initialState: IControlsInitialState = {
  masterVolume: 0.0001,
  oscillatorType: 'sine',
  oscillatorType2: undefined,
  attackGain: 0.1,
  attackTime: 0.1,
  decayTime: 0.1,
  decayVolume: 0.1,
  releaseLength: 0.5,
};

export const synthControlsSlice = createSlice({
  name: 'synthControls',
  initialState,
  reducers: {
    changeOscillatorType: (state, action: PayloadAction<OscillatorType>) => {
      state.oscillatorType = action.payload;
    },
    changeOscillatorType2: (
      state,
      action: PayloadAction<OscillatorType | undefined>
    ) => {
      state.oscillatorType2 = action.payload;
    },
    changeMasterVolume: (state, action: PayloadAction<number>) => {
      state.masterVolume = action.payload;
    },
    changeAttackGain: (state, action: PayloadAction<number>) => {
      state.attackGain = action.payload;
    },
    changeAttackTime: (state, action: PayloadAction<number>) => {
      state.attackTime = action.payload;
    },
    changeDecayTime: (state, action: PayloadAction<number>) => {
      state.decayTime = action.payload;
    },
    changeDecayVolume: (state, action: PayloadAction<number>) => {
      state.decayVolume = action.payload;
    },
    changeReleaseLength: (state, action: PayloadAction<number>) => {
      state.releaseLength = action.payload;
    },
  },
});

export const {
  changeMasterVolume,
  changeOscillatorType,
  changeOscillatorType2,
  changeAttackGain,
  changeAttackTime,
  changeDecayTime,
  changeDecayVolume,
  changeReleaseLength,
} = synthControlsSlice.actions;
