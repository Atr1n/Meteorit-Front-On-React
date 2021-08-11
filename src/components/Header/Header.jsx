import React from 'react'
import imgLogo from '../../img/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-logo">
                    <NavLink to="/"><img width="200" src={imgLogo} alt="Meteorit"/></NavLink>
                </div>
                <div className="header-item">
                    <nav className="header-nav">
                        <ul>
                            <div className="header-nav-wrapper">
                                <li><a href="tel:+77273396800">+7 727 33 96 800</a></li>
                                <li><a className="order-link" href="mailto:order@meteorit.kz">order@meteorit.kz</a></li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header