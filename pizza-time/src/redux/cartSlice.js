import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  count: 0,
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let findedItem = state.items.find((item) => item.id === action.payload.id);
      if (findedItem) {
        findedItem.count += 1;
      } else state.items.push({ ...action.payload, count: 1 });

      state.totalPrice = state.items.reduce((acc, value) => (acc += value.count * value.price), 0);
      state.count = state.items.reduce((acc, value) => (acc += value.count), 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
      state.totalPrice = 0;
    },
    decreaseItem: (state, action) => {
      let findedItem = state.items.find((item) => item.id === action.payload.id);
      if (findedItem) {
        findedItem.count -= 1;
        if (findedItem.count === 0) {
          console.log('тут ноль');
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        }
        state.totalPrice = state.items.reduce(
          (acc, value) => (acc += value.count * value.price),
          0,
        );
        state.count = state.items.reduce((acc, value) => (acc += value.count), 0);
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce((acc, value) => (acc += value.count * value.price), 0);
      state.count = state.items.reduce((acc, value) => (acc += value.count), 0);
    },
  },
});

export const { addItem, clearCart, decreaseItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
