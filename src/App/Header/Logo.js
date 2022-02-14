import { Link } from 'react-router-dom';
import logo from './logo.png';
import { routes } from 'constants/routes';

function Logo() {
  return (
    <div className='logo'>
      <Link to={routes.HOME}>
        <img src={logo} alt='' />
      </Link>
    </div>
  );
}

export default Logo;
