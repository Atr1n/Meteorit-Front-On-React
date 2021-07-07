import React from 'react'
import shopImg1 from '../../../img/shop_1.svg'
import shopImg2 from '../../../img/shop_2.svg'
import shopImg3 from '../../../img/shop_3.svg'
import shopImg4 from '../../../img/shop_4.svg'

const Shops = () => {
    return (
        <section className="shops">
            <div className="container">
                <div className="shops-title">
                    <h2>Наши розничные магазины</h2>
                </div>
                <div className="shops-content">
                    <div className="shops-item">
                        <div className="shops-item__img">
                            <a href="#">
                                <img src={shopImg1} alt="Volt.kz" />
                            </a>
                        </div>
                        <div className="shops-item__text">
                            <p>Магазин товаров для. Быстро и надежно доставим по Алматы и Москве, отправим в регионы</p>
                        </div>
                    </div>
                    <div className="shops-item">
                        <div className="shops-item__img">
                            <a href="#">
                                <img src={shopImg2} alt="HiDEN" />
                            </a>
                        </div>
                        <div className="shops-item__text">
                            <p>Магазин товаров для. Быстро и надежно доставим по Алматы и Москве, отправим в регионы</p>
                        </div>
                    </div>
                    <div className="shops-item">
                        <div className="shops-item__img">
                            <a href="#">
                                <img src={shopImg3} alt="APC" />
                            </a>
                        </div>
                        <div className="shops-item__text">
                            <p>Магазин товаров для. Быстро и надежно доставим по Алматы и Москве, отправим в регионы</p>
                        </div>
                    </div>
                    <div className="shops-item">
                        <div className="shops-item__img">
                            <a href="#">
                                <img src={shopImg4} alt="PCM" />
                            </a>
                        </div>
                        <div className="shops-item__text">
                            <p>Магазин товаров для. Быстро и надежно доставим по Алматы и Москве, отправим в регионы</p>
                        </div>
                    </div>
                    <div className="shops-item">
                        <div className="shops-item__img">
                            <a href="#">
                                <img src={shopImg2} alt="HiDEN" />
                            </a>
                        </div>
                        <div className="shops-item__text">
                            <p>Магазин товаров для. Быстро и надежно доставим по Алматы и Москве, отправим в регионы</p>
                        </div>
                    </div>
                    <div className="shops-item">
                        <div className="shops-item__img">
                            <a href="#">
                                <img src={shopImg3} alt="APC" />
                            </a>
                        </div>
                        <div className="shops-item__text">
                            <p>Магазин товаров для. Быстро и надежно доставим по Алматы и Москве, отправим в регионы</p>
                        </div>
                    </div>
                    <div className="shops-item">
                        <div className="shops-item__img">
                            <a href="#">
                                <img src={shopImg4} alt="PCM" />
                            </a>
                        </div>
                        <div className="shops-item__text">
                            <p>Магазин товаров для. Быстро и надежно доставим по Алматы и Москве, отправим в регионы</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shops