import { Switch, Route } from 'react-router-dom';
import ProductList from 'pages/Product/ProductList';
import MainLayout from 'layouts/MainLayout';
import SecondaryLayout from 'layouts/SecondaryLayout';
import ProductPage from 'pages/Product/ProductPage';
import CartPage from 'pages/Cart/CartPage';
import PaymentPage from 'pages/Payment/PaymentPage';
import ShippingPage from 'pages/Shipping/ShippingPage';
import BasicPage from 'pages/BasicPage/BasicPage';
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
