import type { Ticket } from '../types/Ticket';

const _mainAPI = 'https://aviasales-test-api.kata.academy';

const getSearchID = async () =>
  await fetch(`${_mainAPI}/search`)
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem('session', res.searchId);
    });

const getTickets = async (): Promise<Ticket> => {
  const sessionID = localStorage.getItem('session');
  return await fetch(`${_mainAPI}/tickets?searchId=${sessionID}`).then((res) => res.json());
};

export { getSearchID, getTickets };
