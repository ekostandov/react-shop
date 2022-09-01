import { Switch, Route } from 'react-router-dom';
import ProductList from 'App/Main/Product/ProductList';
import MainLayout from 'layouts/MainLayout';
import SecondaryLayout from 'layouts/SecondaryLayout';
import ProductPage from 'App/Main/Product/ProductPage';
import CartPage from 'App/Main/Cart/CartPage';
import PaymentPage from 'App/Main/Payment/PaymentPage';
import ShippingPage from 'App/Main/Shipping/ShippingPage';
import BasicPage from 'App/Main/BasicPage/BasicPage';
import routes from 'constants/routes';

import 'common/style/reset.css';
import 'common/style/base.css';

const App = () => (
  <div className='App'>
    <Switch>
      <Route
        exact
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
          <Route exact path={routes.CART} component={CartPage} />
          <Route exact path={routes.PAYMENT} component={PaymentPage} />
          <Route exact path={routes.SHIPPING} component={ShippingPage} />
        </MainLayout>
      </Route>

      <Route>
        <SecondaryLayout>
          <Route exact path={'/basic-page'} component={BasicPage} />
        </SecondaryLayout>
      </Route>
    </Switch>
  </div>
);

export default App;
