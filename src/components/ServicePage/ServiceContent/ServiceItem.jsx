import React from 'react'
import ServiceTitle from './ServiceTitle'
import ServiceText from './ServiceText'
import ServiceList from './ServiceList'
import ServiceBtn from '../ServiceBtn/ServiceBtn'

const ServiceItem = () => {
    return (
        <div className="service-item">
            <ServiceTitle 
            title="перед началом работ" 
            />
            <ServiceText 
            text="Перед проведением пуско-наладочных работ наш инженер изучает помещения и оборудование в месте подключения, вносит свои рекомендации, составляет список требований для помещения и аксессуаров (При необходимости будут даны рекомендации о необходимой реорганизации комнаты, например установка охладительных систем)."
            />
            <ServiceTitle 
            title="Пуско-наладка оборудования подразумевает осуществление следующих этапов:" 
            />
            <ServiceList/>
            <ServiceTitle 
            title="Наши готовы оказать весь спектр услуг для эффективной работы оборудования:" 
            />
            <ServiceTitle 
            title="Выполнение работ нашими специалистами - исключает риски поломки оборудования." 
            />
            <ServiceText 
            text="Компетенция наших специалистов подтверждена производителями оборудования, используются только лучшие измерительные приборы и индикаторы FLUKE. Оборудование для электронной нагрузки подтверждено всеми сертификатами."
            />
            <ServiceBtn/>
        </div>
    )
}

export default ServiceItem
