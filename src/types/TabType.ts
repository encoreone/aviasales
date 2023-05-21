export enum TabActionType {
  CHEAP = 'CHEAP',
  FAST = 'FAST',
  BASE = 'BASE',
}

interface TabHandlerAction {
  type: TabActionType;
  payload: TabActionType;
}

interface TabCheapAction {
  type: TabActionType.CHEAP;
  payload: any[];
}

interface TabFastAction {
  type: TabActionType.FAST;
  payload: any[];
}

interface TabBaseAction {
  type: TabActionType.BASE;
  payload: any[];
}

export interface TabState {
  tab: any;
}

export type TabAction = TabCheapAction | TabFastAction | TabBaseAction;
