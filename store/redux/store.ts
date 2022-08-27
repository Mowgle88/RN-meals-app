import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites'

export const store = configureStore({
  reducer: {
    favoritesMeal: favoritesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
