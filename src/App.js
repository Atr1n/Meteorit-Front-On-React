import React, { useState, useEffect } from 'react'
import { Route } from 'react-router'
import Loading from './components/Loading'
import './styles/main.scss'

const MainPage      =    React.lazy(() => import ('./components/MainPage/MainPage'))

{ /* const AboutPage     =    React.lazy(() => import ('./components/AboutPage/AboutPage'))
const ServicePage   =    React.lazy(() => import ('./components/ServicePage/ServicePage'))
const Vacancies     =    React.lazy(() => import ('./components/Vacancies/Vacancies')) */}

const App = () => {

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	})
	
  	return (
		<div>
			{isLoading === true?
				<Loading/>:
				<React.Suspense fallback={<Loading/>}> 
				<Route exact path="/" component={MainPage} />
				{ /* 	
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/services" component={ServicePage} />
					 	<Route exact path="/vacancies" component={Vacancies} />
			    */}
				</React.Suspense>
			}
		</div>
	)
}

export default App