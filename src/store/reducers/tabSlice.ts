import { createSlice } from '@reduxjs/toolkit';

import { ITab } from '../../types/ITab';

const initialState: ITab = {
  currentState: 'cheap',
};

export const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    changeTab(state, action) {
      state.currentState = action.payload;
    },
  },
});

export const { changeTab } = tabSlice.actions;
export default tabSlice.reducer;
