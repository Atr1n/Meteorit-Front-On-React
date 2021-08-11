import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import MainTitle from "../MainTitle/MainTitle"
import ServiceBtn from "./ServiceBtn/ServiceBtn"
import ServiceContent from "./ServiceContent/ServiceContent"

const AboutPage = () => {
  	return (
		<>
			<div className="service-bg">
				<div className="container">
					<Header/>
                    <MainTitle title={'сервис'} />
                	<ServiceBtn/>
				</div>
			</div>
            <ServiceContent/>
            <Footer/>
		</>
	)
}

export default AboutPage
