import { Link } from 'react-router-dom';
import routes from 'constants/routes';
import logo from 'App/Header/logo.png';

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
