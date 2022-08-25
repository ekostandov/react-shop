import { Switch, Route } from 'react-router-dom';
import ProductList from './Main/Product/ProductList';
import ProductPage from './Main/Product/ProductPage';
import CartPage from './Main/Cart/CartPage';
import PaymentPage from './Main/Payment/PaymentPage';
import ShippingPage from './Main/Shipping/ShippingPage';
import MainLayout from 'layouts/MainLayout';
import SecondaryLayout from 'layouts/SecondaryLayout';
import routes from 'constants/routes';

import 'common/style/reset.css';
import 'common/style/base.css';

const App = () => (
  <div className='App'>
    <Switch>
      <Route
        path={[
          routes.HOME,
          routes.CART,
          routes.PRODUCT,
          routes.PAYMENT,
          routes.SHIPPING,
        ]}
      >
        <MainLayout>
          <Route exact path={routes.HOME} component={ProductList} />
          <Route exact path={routes.PRODUCT} component={ProductPage} />
          <Route path={routes.CART} component={CartPage} />
          <Route path={routes.PAYMENT} component={PaymentPage} />
          <Route path={routes.SHIPPING} component={ShippingPage} />
        </MainLayout>
      </Route>

      <Route>
        <SecondaryLayout>Test</SecondaryLayout>
      </Route>
    </Switch>
  </div>
);

export default App;
