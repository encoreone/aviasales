import { useTypeSelector } from '../../hooks/useTypeSelector';

import './Button.scss';

const Button = () => {
  const { view, loading, error } = useTypeSelector((state) => state.ticket);

  if (loading || error) return <></>;

  return (
    <div className="button">
      <p className="button-text">{`Показать еще ${view} билетов!`}</p>
    </div>
  );
};

export { Button };
