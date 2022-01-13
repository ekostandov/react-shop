import React from 'react'
import { Link } from 'react-router-dom'

import "./Mainmenu.css"

function Mainmenu() {
    return (
        <div className="menu">
            <ul>
                <li><Link exact to="/">Home</Link></li>
                <li><Link to="/products">Product</Link></li>
                <li><Link to="/Payment">Payment</Link></li>
                <li><Link to="/Shipping">Shipping</Link></li>
            </ul>
        </div>
    )
}

export default Mainmenu