import React from 'react'

import "./Header.css"

import Logo from "./Logo.js"
import Mainmenu from './Mainmenu/Mainmenu'
import Cart from "./Cart.js"

const Header = () => (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Logo />
                    </div>
                    <div className="col-lg-6">
                        <Mainmenu />
                    </div>
                    <div className="col-lg-3">
                        <Cart />
                    </div>
                </div>
            </div>
        </header>
    )

export default Header;