import React from 'react';

import './Tab.scss';
const Tab = () => {
  return (
    <div className="tabs">
      <div className="tabs-button tabs-button__active">
        <p className="tabs-text">Самый дешевый</p>
      </div>
      <div className="tabs-button">
        <p className="tabs-text">Самый быстрый</p>
      </div>
      <div className="tabs-button">
        <p className="tabs-text">Оптимальный</p>
      </div>
    </div>
  );
};

export { Tab };
