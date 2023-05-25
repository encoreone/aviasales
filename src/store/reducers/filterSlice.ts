import { createSlice } from '@reduxjs/toolkit';

import { IFilter } from '../../types/IFilter';

const initialState: IFilter = {
  all: true,
  zero: true,
  one: true,
  two: true,
  tree: true,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleAll: (state) => {
      state.all = !state.all;
      state.zero = state.all;
      state.one = state.all;
      state.two = state.all;
      state.tree = state.all;
    },
    toggleCurrent: (state, action) => {
      state[action.payload] = !state[action.payload];
      if (state.zero && state.one && state.two && state.tree) state.all = true;
      else state.all = false;
    },
  },
});
export const { toggleAll, toggleCurrent } = filterSlice.actions;
export default filterSlice.reducer;
