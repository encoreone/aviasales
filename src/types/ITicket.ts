import { ITicketAPI } from './ITicketAPI';

interface ITicketState {
  searchId: string;
  tickets: ITicketAPI[];
  loading: boolean;
  error: null;
  view: number;
  sort: string;
}

export type { ITicketState };
