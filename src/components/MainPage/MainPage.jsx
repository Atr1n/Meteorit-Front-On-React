import Header from './Header/Header'
import Main from './Main/Main'
import Equipment from './Equipment/Equipment'
import QuaPersonnel from './QualifiedPersonnel/QuaPersonnel'
import Shops from './Shops/Shops'
import Projects from './Projects/Projects'
import Certificates from './Certificates/Certificates'
import Clients from './Clients/Clients'
import Work from './ConvenienceOfWork/Work'
import Manufactures from './Manufacturers/Manufactures'
import Footer from './Footer/Footer'

const MainPage = () => {
  	return (
		<div>
			<div className="main-background">
				<Header/>
				<Main/>
			</div>
			<Equipment/>
			<QuaPersonnel/>
			<Work/>
			<Shops/>
			<Certificates/>
			<Projects/>
			<Manufactures/>
			<Clients/>
			<Footer/>
		</div>
	);
}

export default MainPage;