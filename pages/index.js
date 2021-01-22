import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import CallToAction from '../components/CallToAction'
import Testimonial from '../components/Testimonial'
import Services from '../components/Services'
import MenuBar from '../components/MenuBar'

export default function Home() {
	return (
		<div>
			<MenuBar />
			<Jumbotron />
			<Testimonial />
			<Services />
			<CallToAction />
			<Footer />
		</div>
	)
}
