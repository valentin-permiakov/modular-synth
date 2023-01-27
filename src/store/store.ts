import { configureStore } from '@reduxjs/toolkit';
import { synthControlsSlice } from './synthControlsSlice';

export const store = configureStore({
  reducer: {
    synthControls: synthControlsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
