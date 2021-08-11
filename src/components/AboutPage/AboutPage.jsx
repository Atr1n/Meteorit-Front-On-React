import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import MainTitle from "../MainTitle/MainTitle"
import Tabs from "./Tabs/Tabs"

const AboutPage = () => {
  	return (
		<>
			<div className="about-bg">
				<div className="container">
					<Header/>
					<MainTitle title={'о компании'} />
				</div>
			</div>
			<Tabs/>
            <Footer/>
		</>
	)
}

export default AboutPage