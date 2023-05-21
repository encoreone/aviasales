import { useTypeSelector } from '../../hooks/useTypeSelector';

import './Tab.scss';

const Tab = () => {
  const tabs = [
    { id: 'cheap', value: 'Самый дешевый', active: true, style: { backgroundColor: '#2196F3', color: 'white' } },
    { id: 'fast', value: 'Самый быстрый', active: false, style: {} },
    { id: 'base', value: 'Оптимальный', active: false, style: {} },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="tabs-button"
          onClick={() => {
            console.log('lox');
          }}
        >
          <p className="tabs-text">{tab.value}</p>
        </div>
      ))}
    </div>
  );
};

export { Tab };
