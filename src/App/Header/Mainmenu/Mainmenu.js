import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';

import './Mainmenu.css';

function Mainmenu() {
  return (
    <div className='menu'>
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.PRODUCTS}>Product</Link>
        </li>
        <li>
          <Link to={routes.PAYMENT}>Payment</Link>
        </li>
        <li>
          <Link to={routes.SHIPPING}>Shipping</Link>
        </li>
      </ul>
    </div>
  );
}

export default Mainmenu;
