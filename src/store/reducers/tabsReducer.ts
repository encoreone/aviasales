/* eslint-disable indent */
import type { TabAction, TabState } from '../../types/TabType';
import { TabActionType } from '../../types/TabType';

const initialState: TabState = {
  tab: TabActionType.CHEAP,
};

export const tabReducer = (state = initialState, action: TabAction): TabState => {
  switch (action.type) {
    case TabActionType.CHEAP:
      return { tab: action.payload };
    case TabActionType.FAST:
      return { tab: action.payload };
    case TabActionType.BASE:
      return { tab: action.payload };
    default:
      return state;
  }
};
