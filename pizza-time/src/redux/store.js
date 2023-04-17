import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlice.js';
import cart from './cartSlice.js';

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
