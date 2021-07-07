import React from 'react'
import Slider from 'react-slick'

import prof1 from '../../../img/project-1.png'

const Projects = () => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <section className="projects">
            <div className="container">
                <div className="projects-title">
                    <h2>Проекты</h2>
                </div>
                <div className="projects-content">
                    <Slider {...settings}>
                        <div className="projects-item">
                            <img src={prof1} alt="Сертификат" />
                        </div>
                        <div className="projects-item">
                            <img src={prof1} alt="Сертификат" />
                        </div>
                        <div className="projects-item">
                            <img src={prof1} alt="Сертификат" />
                        </div>
                        <div className="projects-item">
                            <img src={prof1} alt="Сертификат" />
                        </div>
                        <div className="projects-item">
                            <img src={prof1} alt="Сертификат" />
                        </div>
                        <div className="projects-item">
                            <img src={prof1} alt="Сертификат" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Projects