import { combineReducers } from 'redux';

import { FilterReducer } from './reducers/FilterReducer';

export const rootReducer = combineReducers({
  filter: FilterReducer,
});
