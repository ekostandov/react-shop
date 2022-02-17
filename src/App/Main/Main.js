import { Route } from 'react-router-dom';

import ProductList from './Product/ProductList';

import CartPage from './Cart/CartPage';
import PaymentPage from './Payment/PaymentPage';
import ShippingPage from './Shipping/ShippingPage';
import ProductPage from './Product/ProductPage';
import routes from 'constants/routes';

const Main = () => (
  <main className='main'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3'>Filter</div>
        <div className='col-lg-9'>
          <Route exact path={routes.HOME} component={ProductList} />
          <Route exact path={routes.PRODUCT} component={ProductPage} />
          <Route path={routes.CART} component={CartPage} />
          <Route path={routes.PAYMENT} component={PaymentPage} />
          <Route path={routes.SHIPPING} component={ShippingPage} />
        </div>
      </div>
    </div>
  </main>
);

export default Main;
