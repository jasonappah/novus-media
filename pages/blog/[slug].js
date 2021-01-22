import MenuBar from '../../components/MenuBar'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'

import Jumbotron from '../../components/Jumbotron'

import { useRouter } from 'next/router'


const Post = () => {
	const router = useRouter()
	const { slug } = router.query

	return (
		<div>
			<MenuBar />
			<Jumbotron title={'Blog Post - ' + slug} />

			<CallToAction />
			<Footer />
		</div>
	)
}

export default Post
