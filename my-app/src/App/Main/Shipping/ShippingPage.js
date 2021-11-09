import React from 'react';
import './ShippingPage.css'

const ShippingPage = () => (
    <div className="shipping-page">
        <h1>Shipping adress</h1>
        <form className="shipping-form" name="shipping-form" method="post">
            <div className="row">
                <div className="col-lg-3">
                    <p>First Name</p>
                </div>
                <div className="col-lg-9">
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>Last Name</p>
                </div>
                <div className="col-lg-9">
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>Adress</p>
                </div>
                <div className="col-lg-9">
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>Country</p>
                </div>
                <div className="col-lg-9">
                    <select className="three-halfs-width">
                        <option value="USA">USA</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>Zip/Postal Code</p>
                </div>
                <div className="col-lg-9">
                    <input className="input-half-width" type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>City</p>
                </div>
                <div className="col-lg-9">
                    <input className="three-halfs-width" type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>Region</p>
                </div>
                <div className="col-lg-9">
                    <input className="three-halfs-width" type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>Phone</p>
                </div>
                <div className="col-lg-9">
                    <input className="input-half-width" type="text" />
                </div>
            </div>
            <a className="shipping-form-botton" href="">Send</a>
        </form>
    </div>
)

export default ShippingPage;