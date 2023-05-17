import { combineReducers, configureStore } from '@reduxjs/toolkit';

import TicketsReducer from './reducers/TicketsSlice';

const rootReducer = combineReducers({ store: TicketsReducer });

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
