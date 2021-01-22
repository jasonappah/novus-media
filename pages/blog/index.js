import MenuBar from '../../components/MenuBar'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'

import Jumbotron from '../../components/Jumbotron'

export default function Blog() {
	return (
		<div>
			<MenuBar />
            <Jumbotron title="Blog"/>
			<CallToAction />
			<Footer />
		</div>
	)
}
