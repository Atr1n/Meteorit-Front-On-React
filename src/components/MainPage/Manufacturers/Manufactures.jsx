import React from 'react'
import Slider from 'react-slick'

import manfacImg from '../../../img/manfac.png'

const Manufactures = () => {

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
        <section className="manfac">
            <div className="container">
                <div className="manfac-title">
                    <h2>Наши производители</h2>
                </div>
                <div className="manfac-content">
                    <Slider {...settings}>
                        <div className="manfac-item">
                            <img src={manfacImg} alt="Сертификат" />
                        </div>
                        <div className="manfac-item">
                            <img src={manfacImg} alt="Сертификат" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Manufactures