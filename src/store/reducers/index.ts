import { combineReducers } from 'redux';

import { ticketReducer } from './ticketReducer';
import { tabReducer } from './tabsReducer';

export const rootReducer = combineReducers({
  ticket: ticketReducer,
  tab: tabReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
