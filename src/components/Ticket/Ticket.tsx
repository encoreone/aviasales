import { add, format } from 'date-fns';

import { ITicketAPI } from '../../types/ITicketAPI';

import './Ticket.scss';

interface TicketProps {
  tickets: ITicketAPI;
}

const Ticket: React.FC<TicketProps> = ({ tickets }) => {
  const { carrier, segments, price } = tickets;

  const formatTransfer = (stops: string[]): string => {
    if (stops.length === 1) return `${stops.length} пересадка`;
    if (stops.length > 1) return `${stops.length} пересадки`;
    return 'Без пересадок';
  };

  const formatTime = (duration: number): string => {
    const time = Math.floor(duration / 60);
    const secTime = Math.floor(duration - time * 60);

    if (secTime < 10) return `${time}ч 0${secTime}м`;

    return `${time}ч ${secTime}м`;
  };

  const formatCurrency = (price: number): string => {
    const numbFmt = new Intl.NumberFormat('ru-RU').format(price);

    return `${numbFmt} Р`;
  };

  const formatFlight = (date: string, duration: number): string => {
    const time = format(new Date(date), 'HH:mm');
    const secTime = format(add(new Date(date), { minutes: duration }), 'HH:mm');

    return `${time} - ${secTime}`;
  };

  const image = `https://pics.avs.io/99/36/${carrier}.png`;
  const ticketBody = segments.map((item, index) => (
    <div key={`${item.duration}-${index}`} className="ticket-body-list">
      <div className="ticket-body-list-col">
        <div className="ticket-body-list-title">
          {item.destination} - {item.origin}
        </div>
        <div className="ticket-body-list-desc">{formatFlight(item.date, item.duration)}</div>
      </div>
      <div className="ticket-body-list-col">
        <div className="ticket-body-list-title">В пути</div>
        <div className="ticket-body-list-desc">{formatTime(item.duration)}</div>
      </div>
      <div className="ticket-body-list-col">
        <div className="ticket-body-list-title">{formatTransfer(item.stops)}</div>
        <div className="ticket-body-list-desc">{item.stops.join(', ')}</div>
      </div>
    </div>
  ));

  return (
    <div className="ticket">
      <div className="ticket-header">
        <p className="ticket-price">{formatCurrency(price)}</p>
        <img src={image} alt="logo" />
      </div>
      <div className="ticket-body">{ticketBody}</div>
    </div>
  );
};

export { Ticket };
