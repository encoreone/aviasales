import type { Dispatch } from 'redux';

import { TicketAction, TicketActionType } from '../../types/TicketType';

export const fetchTicket: any = () => {
  return async (dispatch: Dispatch<TicketAction>) => {
    dispatch({ type: TicketActionType.FETCH_TICKETS });

    const getSearchId = async () => {
      await fetch('https://aviasales-test-api.kata.academy/search')
        .then((res) => res.json())
        .then((res) => ticketAPI(res.searchId))
        .catch((e) => dispatch({ type: TicketActionType.FETCH_TICKETS_ERROR, payload: e }));
    };

    getSearchId();

    const ticketAPI = async (id: string) => {
      await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
        .then((res) => {
          if (res.ok) return res.json();
          if (res.status === 500) ticketAPI(id);
        })
        .then((res) => {
          if (!res.stop) dispatch({ type: TicketActionType.FETCH_TICKETS_SUCCESS, payload: res.tickets });
          if (res.stop) dispatch({ type: TicketActionType.FETCH_TICKETS_STOP, payload: res.stop });
        })
        .catch((e) => dispatch({ type: TicketActionType.FETCH_TICKETS_ERROR, payload: e }));
    };
  };
};
