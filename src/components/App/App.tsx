import { Button } from '../Button';
import { Filter } from '../Filter';
import { Header } from '../Header';
import { Tab } from '../Tab';
import { TicketList } from '../TicketList';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="App-block">
        <div className="App-block-left">
          <Filter />
        </div>
        <div className="App-block-right">
          <Tab />
          <TicketList />
          <Button />
        </div>
      </section>
    </div>
  );
};

export { App };
