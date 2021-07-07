import React from 'react'
import imgLogo from '../../../img/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <a href="#"><img width="200" src={imgLogo} alt="Meteorit"/></a>
                    </div>
                    <div className="header-item">
                        <nav className="header-nav">
                            <ul>
                                <li><a href="#">о компании</a></li>
                                <li><a href="#">услуги</a></li>
                                <li><a href="#">вакансии</a></li>
                                <li><a href="#">оборудование</a></li>
                                <li><a href="#">контакты</a></li>
                                <div className="header-nav-wrapper">
                                    <li><a href="tel:+77273396800">+7 727 33 96 800</a></li>
                                    <li><a className="order-link" href="#">order@meteorit.kz</a></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header