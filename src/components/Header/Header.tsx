import Logo from './assets/Logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={Logo} alt="logo" />
    </div>
  );
};

export { Header };
