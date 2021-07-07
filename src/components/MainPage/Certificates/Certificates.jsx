import React from 'react'

import Cert1 from '../../../img/cert-1.png'
import Cert2 from '../../../img/cert-2.png'
import Cert3 from '../../../img/cert-3.png'
import Cert4 from '../../../img/cert-4.png'

import Slider from 'react-slick'

const Certificates = () => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <section className="certificates">
            <div className="container">
                <div className="certificates-title">
                    <h2>Сертификаты</h2>
                </div>
                <div className="certificates-content">
                    <Slider {...settings}>
                        <div className="certificates-item">
                            <img src={Cert1} alt="Сертификат" />
                        </div>
                        <div className="certificates-item">
                            <img src={Cert2} alt="Сертификат" />
                        </div>
                        <div className="certificates-item">
                            <img src={Cert3} alt="Сертификат" />
                        </div>
                        <div className="certificates-item">
                            <img src={Cert4} alt="Сертификат" />
                        </div>
                        <div className="certificates-item">
                            <img src={Cert4} alt="Сертификат" />
                        </div>
                        <div className="certificates-item">
                            <img src={Cert4} alt="Сертификат" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Certificates