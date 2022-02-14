import { Link } from 'react-router-dom';
import logo from './logo.png';
import { routes } from 'constants/routes';

function Logo() {
  return (
    <div className='logo'>
      <Link to={routes.home}>
        <img src={logo} alt='Logo' />
      </Link>
    </div>
  );
}

export default Logo;
