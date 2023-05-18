import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { ticketAPI } from '../api/api';

export const store = configureStore({
  reducer: { [ticketAPI.reducerPath]: ticketAPI.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketAPI.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
