import React from 'react';
import { add, format } from 'date-fns';

import { TicketAPIType } from '../../types/TicketAPIType';

import './Ticket.scss';

interface TicketProps {
  tickets: TicketAPIType;
}

const Ticket: React.FC<TicketProps> = ({ tickets }) => {
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

  const image = `https://pics.avs.io/99/36/${tickets.carrier}.png`;
  const ticketBody = tickets.segments.map((ticket, index) => (
    <div key={index} className="ticket-body-list">
      <div className="ticket-body-list-col">
        <div className="ticket-body-list-title">
          {ticket.destination} - {ticket.origin}
        </div>
        <div className="ticket-body-list-desc">{formatFlight(ticket.date, ticket.duration)}</div>
      </div>
      <div className="ticket-body-list-col">
        <div className="ticket-body-list-title">В пути</div>
        <div className="ticket-body-list-desc">{formatTime(ticket.duration)}</div>
      </div>
      <div className="ticket-body-list-col">
        <div className="ticket-body-list-title">{formatTransfer(ticket.stops)}</div>
        <div className="ticket-body-list-desc">{ticket.stops.join(', ')}</div>
      </div>
    </div>
  ));

  return (
    <div className="ticket">
      <div className="ticket-header">
        <p className="ticket-price">{formatCurrency(tickets.price)}</p>
        <img src={image} alt="logo" />
      </div>
      <div className="ticket-body">{ticketBody}</div>
    </div>
  );
};

export { Ticket };
