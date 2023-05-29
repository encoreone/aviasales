import { useEffect, useMemo } from 'react';
import { Alert } from 'antd';

import { Ticket } from '../Ticket/Ticket';
import { changeView, getSearchId, getTickets } from '../../store/reducers/ticketSlice';
import { Button } from '../Button';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';
import { ITicketAPI } from '../../types/ITicketAPI';
import { Loading } from '../Loading';

import './TicketList.scss';

const TicketList = () => {
  const dispatch = useAppDispatch();
  const searchId = useAppSelector((state) => state.ticket.searchId);
  const tickets = useAppSelector((state) => state.ticket.tickets);
  const view = useAppSelector((state) => state.ticket.view);
  const loading = useAppSelector((state) => state.ticket.loading);
  const sort = useAppSelector((state) => state.ticket.sort);
  const filters = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (loading && searchId) {
      dispatch(getTickets(searchId));
    }
  }, [searchId, tickets]);

  const sortBy = (type: string) => {
    if (type === 'cheap') return (a: ITicketAPI, b: ITicketAPI) => a.price - b.price;
    if (type === 'fast')
      return (a: ITicketAPI, b: ITicketAPI) =>
        a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration;
  };

  const allTickets = useMemo(
    () =>
      tickets
        .filter((ticket) =>
          ticket?.segments.every(
            (segment) =>
              (!filters.all && segment.stops.length === Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1))) ||
              (filters.zero && segment.stops.length === 0) ||
              (filters.one && segment.stops.length === 1) ||
              (filters.two && segment.stops.length === 2) ||
              (filters.tree && segment.stops.length === 3)
          )
        )
        .sort(sortBy(sort)),
    [sort, filters, tickets]
  );

  const nonFilterComponent = () => (
    <Alert
      style={{ marginTop: 5 }}
      message="Что-то пошло не так..."
      description="Рейсов, подходящих под заданные фильтры, не найдено :("
      type="info"
    />
  );

  const ticketsView = allTickets.slice(0, view);
  return (
    <>
      {loading && <Loading />}
      {allTickets.length === 0 && !loading && nonFilterComponent()}
      {allTickets.length > 0 &&
        ticketsView.map((item, index) => <Ticket key={`${item.price}-${index}`} tickets={item} />)}
      {allTickets.length > 0 && <Button onClick={() => dispatch(changeView())} />}
    </>
  );
};

export { TicketList };
