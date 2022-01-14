import React from 'react'

import { Route } from 'react-router-dom'

import ProductList from "./Product/ProductList.js"

import CartPage from './Cart/CartPage';
import PaymentPage from './Payment/PaymentPage';
import ShippingPage from './Shipping/ShippingPage';
import ProductPage from './Product/ProductPage'

const Main = () => (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        Filter
                    </div>
                    <div className="col-lg-9">
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products/:productId" component={ProductPage} />
                        <Route path="/cart" component={CartPage} />
                        <Route path="/payment" component={PaymentPage}/>
                        <Route path="/shipping" component={ShippingPage}/>
                    </div>
                </div>
            </div>
        </main>
    )

export default Main;