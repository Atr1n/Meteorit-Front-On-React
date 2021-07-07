import React from 'react'
import Slider from 'react-slick'

import clientsImg from '../../../img/clients-1.png'

const Clients = () => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
        breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
        breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
        breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
      ]
    }
    
    return (
        <section className="clients">
            <div className="container">
                <div className="clients-wrapper__desc">
                    <div className="clients-desc">
                        <h2>Наши клиенты</h2>
                    </div>
                    <div className="clients-desc">
                        <h3>160+</h3>
                        <p>довольных <br /> клиентов</p>
                    </div>
                    <div className="clients-desc">
                        <h3>670+</h3>
                        <p>выполненных <br /> проектов</p>
                    </div>
                </div>
                <div className="clients-content">
                    <Slider {...settings}>
                        <div className="projects-item">
                            <img src={clientsImg} alt="Сертификат" />
                        </div>
                        <div className="projects-item">
                            <img src={clientsImg} alt="Сертификат" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Clients