import React from 'react'
import workHelp from '../../../img/icon_help.png'
import workPrice from '../../../img/icon_price.png'
import workDocs from '../../../img/icon_docs.png'
import workProject from '../../../img/icon_project.png'
import workDelivery from '../../../img/icon_delivery.png'

const Work = () => {
    return (
        <section className="work">
            <div className="container">
                <div className="work-content">
                    <div className="work-item">
                        <div className="work-item__title">
                            <h2>Удобство работы с нами</h2>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-item__img">
                            <img src={workHelp} alt="Help" />
                        </div>
                        <div className="work-item__desc">
                            <h3>всегда поможем</h3>
                            <p>Центр поддержки и продаж</p>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-item__img">
                            <img src={workPrice} alt="Price" />
                        </div>
                        <div className="work-item__desc">
                            <h3>лучшие цены</h3>
                            <p>Система лояльности, отсрочка <br /> платежа</p>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-item__img">
                            <img src={workDocs} alt="Docs" />
                        </div>
                        <div className="work-item__desc">
                            <h3>Полный пакет закрывающих документов</h3>
                            <p>Выставление ЭСФ в день отгрузки</p>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-item__img">
                            <img src={workProject} alt="Projects" />
                        </div>
                        <div className="work-item__desc">
                            <h3>Под ключ</h3>
                            <p>От проекта до ПНР и сервисного обслуживания</p>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-item__img">
                            <img src={workDelivery} alt="Delivery" />
                        </div>
                        <div className="work-item__desc">
                            <h3>Доставка</h3>
                            <p>Быстро и надежно доставим по Алматы и Москве, отправим в регионы</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work