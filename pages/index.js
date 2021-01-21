import Head from 'next/head'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import CallToAction from '../components/CallToAction'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Novus Media</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Jumbotron />
			<CallToAction />
			<Footer />
		</div>
	)
}
