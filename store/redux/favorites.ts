import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  ids: string []
}

const initialState: CounterState = {
  ids: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state: CounterState, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state: CounterState, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;