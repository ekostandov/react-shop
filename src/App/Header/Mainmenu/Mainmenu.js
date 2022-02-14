import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';

import './Mainmenu.css';

function Mainmenu() {
  return (
    <div className='menu'>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.products}>Product</Link>
        </li>
        <li>
          <Link to={routes.payment}>Payment</Link>
        </li>
        <li>
          <Link to={routes.shipping}>Shipping</Link>
        </li>
      </ul>
    </div>
  );
}

export default Mainmenu;
