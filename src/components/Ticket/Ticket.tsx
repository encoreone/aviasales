import React from 'react';

import './Ticket.scss';
import { useGetTicketsQuery } from '../../api/api';

const Ticket = () => {
  const { data, isLoading, error } = useGetTicketsQuery(0);
  console.log(data);
  return (
    <div className="ticket">
      <div className="ticket-header">
        <p>13 400 R</p>
      </div>
      {/* {isLoading ? (
        'loading'
      ) : error ? (
        'error'
      ) : ( */}
      <div className="ticket-main">
        <div className="ticket-main-first">
          <div className="kek">
            <p>MOW – HKT</p>
            <p>10:45 – 08:00</p>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export { Ticket };
