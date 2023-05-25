import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ITicketState } from '../../types/ITicket';

export const getSearchId = createAsyncThunk('tickets/getSearchId', () =>
  fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json())
);

export const getTickets = createAsyncThunk('tickets/getTickets', (id: string) =>
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    .then((res) => {
      if (!res.ok) throw new Error('smth wrong');

      return res.json();
    })
    .catch(() => [])
);

const initialState: ITicketState = {
  searchId: '',
  tickets: [],
  loading: false,
  error: null,
  view: 5,
  sort: '',
};

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    changeView(state) {
      state.view += 5;
    },
    changeSort(state, action) {
      state.view = 5;
      state.sort = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSearchId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchId.fulfilled, (state, action) => {
      state.searchId = action.payload.searchId;
    });
    builder.addCase(getSearchId.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getTickets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.tickets = state.tickets.concat(action.payload.tickets);
      state.loading = !action.payload.stop;
    });
    builder.addCase(getTickets.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const { changeSort, changeView } = ticketSlice.actions;
export default ticketSlice.reducer;
