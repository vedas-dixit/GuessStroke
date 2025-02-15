import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  roomId: string | null;
  userId: string | null;
  isHost: boolean;
  players: string[];
}

const initialState: GameState = {
  roomId: null,
  userId: null,
  isHost: false,
  players: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameData: (
      state,
      action: PayloadAction<{ roomId: string; userId: string; isHost: boolean }>
    ) => {
      state.roomId = action.payload.roomId;
      state.userId = action.payload.userId;
      state.isHost = action.payload.isHost;
    },
    addPlayer: (state, action: PayloadAction<string>) => {
      state.players.push(action.payload);
    },
    removePlayer: (state, action: PayloadAction<string>) => {
      state.players = state.players.filter(player => player !== action.payload);
    },
    clearGameState: (state) => {
      state.roomId = null;
      state.userId = null;
      state.isHost = false;
      state.players = [];
    }
  }
});

export const { setGameData, addPlayer, removePlayer, clearGameState } = gameSlice.actions;

export default gameSlice.reducer;
