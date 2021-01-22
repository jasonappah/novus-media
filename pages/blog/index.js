import MenuBar from '../../components/MenuBar'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'

import Jumbotron from '../../components/Jumbotron'

import {Heading, Text} from '@chakra-ui/react'

export default function Blog({allPosts}) {
	return (
		<div>
			<MenuBar />
			<Jumbotron title="Blog" />
			<CallToAction />
			<Footer />
		</div>
	)
}

export async function getStaticProps() {
    const allPosts = [
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
    ]
  
    return {
      props: { allPosts },
    }
  }