import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/header.css'

const Header = ({ isHome }) => {
    return (
        <header>
            <NavLink to='/'>
                <h3>React Router Dom v5</h3>
            </NavLink>
            {isHome && (
                <ul>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register'>Register</NavLink>
                    </li>
                </ul>
            )}
        </header>
    )
}

export default Header
