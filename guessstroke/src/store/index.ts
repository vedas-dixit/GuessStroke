import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './slices/gameSlice';

export const Store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

