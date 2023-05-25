import { toggleAll, toggleCurrent } from '../../store/reducers/filterSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';

import './Filter.scss';

const Filter = () => {
  const dispatch = useAppDispatch();
  const filtersStatus = useAppSelector((state) => state.filter);
  const filters = [
    { id: 'all', name: 'Все', action: toggleAll },
    { id: 'zero', name: 'Без пересадок', action: toggleCurrent },
    { id: 'one', name: '1 пересадка', action: toggleCurrent },
    { id: 'two', name: '2 пересадки', action: toggleCurrent },
    { id: 'tree', name: '3 пересадки', action: toggleCurrent },
  ];

  return (
    <div className="filter">
      <div className="filter-title">
        <p className="filter-text">Количество пересадок</p>
      </div>
      <div className="filter-buttons">
        {filters.map((filter) => (
          <label key={`filter-${filter.id}`} className="filter-buttons-item" htmlFor={`checkbox-${filter.id}`}>
            <input
              className="filter-buttons-input"
              type="checkbox"
              name="filters"
              id={`checkbox-${filter.id}`}
              checked={filtersStatus[filter.id]}
              onChange={() => dispatch(filter.action(filter.id))}
            />
            {filter.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export { Filter };
