import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Ticket } from '../types/Ticket';

export const ticketAPI = createApi({
  reducerPath: 'api/tickets',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy' }),
  endpoints: (build) => ({
    getSearchId: build.query({ query: () => '/search' }),
    getTickets: build.query<Ticket[], number>({ query: () => 'tickets' }),
  }),
});

export const { useGetTicketsQuery } = ticketAPI;

// import type { Ticket } from '../types/Ticket';

// const _mainAPI = 'https://aviasales-test-api.kata.academy';

// const getSearchID = async () =>
//   await fetch(`${_mainAPI}/search`)
//     .then((res) => res.json())
//     .then((res) => {
//       localStorage.setItem('session', res.searchId);
//     });

// const getTickets = async (): Promise<Ticket> => {
//   const sessionID = localStorage.getItem('session');
//   return await fetch(`${_mainAPI}/tickets?searchId=${sessionID}`).then((res) => res.json());
// };

// export { getSearchID, getTickets };
