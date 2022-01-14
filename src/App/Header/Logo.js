import React from 'react'
import logo from './logo.png'

import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className="logo">
            <Link exact to="/"><img src={logo} alt="" /></Link>
        </div>
    )
}

export default Logo;