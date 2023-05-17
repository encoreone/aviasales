import { Ticket } from './Ticket';

interface TicketState {
  tickets: Ticket[];
  sort: string;
  filters: string[];
  loading: boolean;
}

export type { TicketState };
