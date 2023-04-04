import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlice.js';

export const store = configureStore({
  reducer: {
    filter,
  },
});
