import { Button } from '../Button';
import { Filter } from '../Filter';
import { Header } from '../Header';
import { Tab } from '../Tab';
import { TicketList } from '../TicketList';
import { RootState } from '../../redux';
import { useAppSelector } from '../../redux/redux';
import TicketsSlice from '../../redux/reducers/TicketsSlice';

import './App.scss';

const App = () => {
  const { sort } = useAppSelector((state) => state.store);
  console.log(sort);
  return (
    <div className="App">
      <Header />
      <Filter />
      <Tab />
      <TicketList />
      <Button />
    </div>
  );
};

export { App };
