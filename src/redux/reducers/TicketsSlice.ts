import { createSlice } from '@reduxjs/toolkit';

import { TicketState } from '../../types/TicketState';

const initialState: TicketState = {
  tickets: [],
  sort: 'cheap',
  filters: ['transfer', 'transfer-one', 'transfer-two', 'transfer-tree'],
  loading: true,
};

export const tickets = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setSort(state, action) {
      return { ...state, sort: action.payload };
    },
  },
});

export default tickets.reducer;
