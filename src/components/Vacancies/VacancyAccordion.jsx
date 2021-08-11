import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import img from '../../img/facebook.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: '30px',
        fontWeight: 700,
    },
    activeBody: {
        margin: '3rem 0', 
    }
}))

const VacancyAccordion = () => {

    const classes = useStyles()

    return (
        <div className="vacan-item">
            <div className={classes.root}>
                <Accordion className={classes.activeBody}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <div className="acc-content">
                            <div className="acc-title">
                                <h2 className={classes.heading}>Требуется IT специалист</h2>
                                <img src={img} alt="" />
                            </div>
                            <div className="acc-title">
                                <p>29.05.2021</p>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-content">
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <h3>Наша компания - для вас, если:</h3>
                                </div>
                                <div className="accordion-list">
                                    <ul>
                                        <li>Вы ответственно подходите к решению каждой задачи</li>
                                        <li>Вы заинтересованы в личном и проффесиональном развитии</li>
                                        <li>Вы способны не только генерировать идеи, но и реализовывать их</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <h3>Обязанности администратора сайта:</h3>
                                </div>
                                <div className="accordion-list">
                                    <ul>
                                        <li>Контролировать ценообразования продукции на сайтах и маркетплейсах</li>
                                        <li>Настройка ПО для управления прайс-листами, дальнейшая интеграция прайст-листов</li>
                                        <li>Работа с маркетплейсами (яндекс маркет, каспи магазин, jmart, omart</li>
                                        <li>Работа с 1C</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <h3>Требования к кандидатам:</h3>
                                </div>
                                <div className="accordion-list">
                                    <ul>
                                        <li>Опыт разработки верстки сайтов</li>
                                        <li>Знание основ программирования</li>
                                        <li>Отличное знание woocommerce</li>
                                        <li>Ответственность</li>
                                        <li>Быстрая обучаемость</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <h3>График работы:</h3>
                                </div>
                                <div className="accordion-text">
                                    <p>пн - пт с 9-00 до 18-00</p>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.activeBody}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <h2 className={classes.heading}>Администратор сайта</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-body">
                            <div className="accordion-title">
                                <h3>Наша компания - для вас, если:</h3>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>asd</li>
                                    <li>dsa</li>
                                    <li>dsa</li>
                                    <li>dsa</li>
                                </ul>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.activeBody}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <h2 className={classes.heading}>Дизайнер</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-body">
                            <div className="accordion-title">
                                <h3>Наша компания - для вас, если:</h3>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>asd</li>
                                    <li>dsa</li>
                                    <li>dsa</li>
                                    <li>dsa</li>
                                </ul>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default VacancyAccordion
