import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Ticket } from '../types/Ticket';

const getSearchId = async () => {
  fetch('https://aviasales-test-api.kata.academy/search')
    .then((res) => res.json())
    .then((res) => {
      if (localStorage.getItem('sessions') === null) {
        localStorage.setItem('session', res.searchId);
      }
    });
};

getSearchId();

export const ticketAPI = async () => {
  await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${localStorage.getItem('session')}`);
};
