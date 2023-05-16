import './Filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-title">
        <p className="filter-text">Количество пересадок</p>
      </div>
      <div className="filter-buttons">
        <div className="filter-buttons__item">
          <input className="filter-buttons__checkbox" type="checkbox" name="all" id="all" />
          <label className="filter-buttons__label" htmlFor="all">
            Все
          </label>
        </div>
      </div>
    </div>
  );
};

export { Filter };
