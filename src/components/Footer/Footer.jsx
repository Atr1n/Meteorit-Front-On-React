import React from 'react'
import FooterLogo from '../../img/meteorit_logo.svg'
import FacebookImg from '../../img/facebook.svg'
import InstagramImg from '../../img/instagram.svg'
import YoutubeImg from '../../img/youtube.svg'
import TelegramImg from '../../img/telegramm.svg'
import CallImg from '../../img/call.png'
import FooterLinks from './FooterLinks'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-item">
                        <div className="footer-item__logo">
                            <img src={FooterLogo} alt="Meteorit" />
                        </div>
                        <div className="footer-item__links">
                            <FooterLinks img={FacebookImg} alt={"FaceBook"} width={50} />
                            <FooterLinks img={InstagramImg} alt={"Instagram"} width={50} />
                            <FooterLinks img={YoutubeImg} alt={"YouTube"} width={50} />
                            <FooterLinks img={TelegramImg} alt={"Telegram"} width={50} />
                        </div>
                        <div className="footer-item__copy">
                            <p>© 2021 meteorit.kz</p>
                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="footer-item__title">
                            <h4>Информация</h4>
                        </div>
                        <nav className="footer-item__nav">
                            <ul>
                                <li><a href="#">Каталог Товаров</a></li>
                                <li><a href="#">Все категории</a></li>
                                <li><a href="#">Доставка</a></li>
                                <li><a href="#">Реквизиты</a></li>
                                <li><a href="#">Заказать Счет</a></li>
                                <li><a href="#">Полезная информация</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-item">
                        <div className="footer-item__title">
                            <h4>Ваш аккаунт</h4>
                        </div>
                        <nav className="footer-item__nav">
                            <ul>
                                <li><a href="#">Заказы</a></li>
                                <li><a href="#">Детали</a></li>
                                <li><a href="#">Забыли свой пароль?</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-item">
                        <div className="footer-item__qa">
                            <div className="footer-item__qa-img">
                                <img src={CallImg} alt="Ждем звонка" width="50" height="50" />
                            </div>
                            <div className="footer-item__qa-text">
                                <div className="qa-text">
                                    <p>возникли вопросы? звоните:</p>
                                </div>
                                <div className="qa-text">
                                    <a href="#">+7 727 33 97 500</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-item__text">
                            <p>Казахстан, Алматы, ул. Хаджи Мукана 26A</p>
                            <div className="footer-item__text-wrapper">
                                <p>Email:</p>
                                <a href="#">order@meteorit.kz</a>
                            </div>
                        </div>
                        <div className="footer-item__text">
                            <h4>Время работы:</h4>
                            <p>Понедельник - Пятница с 9:00 до 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer