// import { Ticket } from './Ticket';

export interface TicketState {
  tickets: any[];
  loading: boolean;
  error: null | string;
  stop: boolean;
  view: number;
}

export enum TicketActionType {
  FETCH_TICKETS = 'FETCH_TICKETS',
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
  FETCH_TICKETS_STOP = 'FETCH_TICKETS_STOP',
}

interface FetchTicketAction {
  type: TicketActionType.FETCH_TICKETS;
}

interface FetchTicketSuccessAction {
  type: TicketActionType.FETCH_TICKETS_SUCCESS;
  payload: any[];
}

interface FetchTicketErrorAction {
  type: TicketActionType.FETCH_TICKETS_ERROR;
  payload: string;
}

interface FetchTicketStopAction {
  type: TicketActionType.FETCH_TICKETS_STOP;
  payload: boolean;
}

export type TicketAction =
  | FetchTicketAction
  | FetchTicketSuccessAction
  | FetchTicketErrorAction
  | FetchTicketStopAction;
