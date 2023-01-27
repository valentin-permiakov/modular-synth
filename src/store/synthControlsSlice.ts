import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  masterVolume: number;
  oscillatorType: string;
}

export const initialState: IInitialState = {
  masterVolume: 1,
  oscillatorType: 'square',
};

export const synthControlsSlice = createSlice({
  name: 'synthControls',
  initialState,
  reducers: {
    changeVolume: (state, action: PayloadAction<number>) => {
      state.masterVolume = action.payload;
    },
  },
});

export const { changeVolume } = synthControlsSlice.actions;
