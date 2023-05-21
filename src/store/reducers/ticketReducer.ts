/* eslint-disable indent */
import { TicketState, TicketAction, TicketActionType } from '../../types/TicketType';

const initialState: TicketState = {
  tickets: [],
  loading: false,
  error: null,
  stop: false,
  view: 5,
};

export const ticketReducer = (state = initialState, action: TicketAction): TicketState => {
  switch (action.type) {
    case TicketActionType.FETCH_TICKETS:
      return { loading: true, error: null, tickets: [], stop: false, view: 0 };
    case TicketActionType.FETCH_TICKETS_SUCCESS:
      return { loading: false, error: null, tickets: action.payload, stop: false, view: 5 };
    case TicketActionType.FETCH_TICKETS_STOP:
      return { loading: false, error: null, tickets: [], stop: action.payload, view: 5 };
    case TicketActionType.FETCH_TICKETS_ERROR:
      return { loading: false, error: action.payload, tickets: [], stop: false, view: 0 };
    default:
      return state;
  }
};
