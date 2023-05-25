import './Button.scss';

interface ButtonState {
  onClick: () => void;
}

const Button: React.FC<ButtonState> = ({ onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      <p className="button-text">{'Показать еще 5 билетов!'}</p>
    </div>
  );
};

export { Button };
