import React from 'react';

import './Tab.scss';

const Tab = () => {
  return (
    <div className="tabs">
      <div className="tabs-active">
        <p className="tabs-text-active">Самый дешевый</p>
      </div>
      <div className="tabs-active">
        <p className="tabs-text">Самый быстрый</p>
      </div>
      <div className="tabs-active">
        <p className="tabs-text">Оптимальный</p>
      </div>
    </div>
  );
};

export { Tab };
