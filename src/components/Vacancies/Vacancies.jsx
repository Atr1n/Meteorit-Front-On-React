import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainTitle from '../MainTitle/MainTitle'
import VacancyAccordion from './VacancyAccordion'

const Vacancies = () => {
    return (
        <>
            <div className="service-bg">
				<div className="container">
					<Header/>
                    <MainTitle title={'вакансии'} />
				</div>
			</div>
            <section className="vacan">
                <div className="container">
                    <div className="vacan-content">
                        <VacancyAccordion/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Vacancies
