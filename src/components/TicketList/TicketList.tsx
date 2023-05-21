import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Ticket } from '../Ticket/Ticket';
import { fetchTicket } from '../../store/actions/ticket';

import './TicketList.scss';

const TicketList = () => {
  const { loading, error, tickets, view } = useTypeSelector((state) => state.ticket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTicket());
  }, []);

  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>loading...</h1>;

  return (
    <>
      {tickets.slice(0, view).map((item, index) => (
        <ul key={index}>
          <Ticket tickets={item} />
        </ul>
      ))}
    </>
  );
};

export { TicketList };
