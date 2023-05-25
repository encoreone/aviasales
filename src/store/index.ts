import { configureStore } from '@reduxjs/toolkit';

import ticketSlice from './reducers/ticketSlice';
import tabSlice from './reducers/tabSlice';
import filterSlice from './reducers/filterSlice';

export const store = configureStore({
  reducer: {
    ticket: ticketSlice,
    tab: tabSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
