import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  itemOfSort: { title: 'rating', name: 'популярности' },
  currentPage: 0,
};

export const counterSlice = createSlice({
  name: 'filterr',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.itemOfSort.title = action.payload.title;
      state.itemOfSort.name = action.payload.name;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage } = counterSlice.actions;

export default counterSlice.reducer;
