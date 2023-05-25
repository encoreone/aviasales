import { changeSort } from '../../store/reducers/ticketSlice';
import { changeTab } from '../../store/reducers/tabSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';

import './Tab.scss';

const Tab = () => {
  const dispatch = useAppDispatch();
  const currentTab = useAppSelector((state) => state.tab.currentState);
  const tabs = [
    { id: 'cheap', value: 'Самый дешевый' },
    { id: 'fast', value: 'Самый быстрый' },
    { id: 'base', value: 'Оптимальный' },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <span key={index} style={{ flexGrow: 1 }}>
          <input
            className="tabs-input"
            type="radio"
            hidden
            id={`${tab.id}`}
            checked={currentTab === tab.id}
            onChange={() => {
              dispatch(changeTab(tab.id));
              dispatch(changeSort(tab.id));
            }}
          />
          <label className="tabs-button" htmlFor={`${tab.id}`}>
            {tab.value}
          </label>
        </span>
      ))}
    </div>
  );
};

export { Tab };
