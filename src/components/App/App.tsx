import { Button } from '../Button';
import { Filter } from '../Filter';
import { Header } from '../Header';
import { Tab } from '../Tab';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Filter />
      {/* <Tab /> */}
      <Button />
    </div>
  );
};

export { App };
