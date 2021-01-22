import {
	Text,
	Box,
	Link as ChakraLink,
	SimpleGrid,
	Heading,
	Image,
	useToast,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NoPage from './NoPage'
import Link from 'next/link'

function Footer() {
	const toast = useToast()
	return (
		<Box bg="purple.900" p={8}>
			<SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} spacing={10}>
				<Box color="purple.50" p={2}>
					<Image
						p={4}
						boxSize="xxs"
						fit="contain"
						align="left top"
						src="/logo-transparent-no-text.png"
					/>
					<Heading size="lg">Novus Media</Heading>
					<Text as="i">
						Your one stop shop for all your digital marketing needs.
					</Text>
				</Box>
				<FooterCol
					toast={toast}
					title="Company"
					links={[
						{ title: 'Home', url: '/' },
						{ title: 'Blog', url: '/blog' },
						{ title: 'Team' },
						{ title: 'Finances' },
						{ title: 'About' },
					]}
				/>
				<FooterCol
					toast={toast}
					title="Services"
					links={[
						{ title: 'Videography' },
						{ title: 'Photography' },
						{ title: 'Social Media Marketing' },
						{ title: 'Web Development' },
						{ title: 'Pricing' },
					]}
				/>

				<FooterCol
					toast={toast}
					title="Why Novus"
					links={[
						{ title: 'Compare Novus to Glide Design' },
						{ title: 'Compare Novus to Rock Candy Media' },
						{ title: 'Compare Novus to Workhorse Marketing' },
					]}
				/>

				<FooterCol
					toast={toast}
					title="Follow Us"
					links={[
						{ title: 'Twitter' },
						{ title: 'Facebook' },
						{ title: 'Instagram' },
						{ title: 'Blog', url: '/blog' },
					]}
				/>
			</SimpleGrid>
			<Byline />
		</Box>
	)
}

function Byline() {
	return (
		<Box w="100%" p={4}>
			<Text fontSize="xs" color="purple.100">
				This site is custom-built with React.js and Chakra UI. Like our work?
				Get in touch!
			</Text>
			<Text fontSize="xs" color="purple.100">
				Copyright © {new Date().getFullYear()}{' '}
				<ChakraLink href="https://jasonaa.me" isExternal>
					Jason Antwi-Appah <ExternalLinkIcon mx="2px" />
				</ChakraLink>{' '}
				|{' '}
				<ChakraLink href="https://jasonaa.me/g/novus-media" isExternal>
					View source on GitHub <ExternalLinkIcon mx="2px" />.
				</ChakraLink>
			</Text>
		</Box>
	)
}

function FooterCol(props) {
	const padding = 2
	const { links, title, toast } = props
	return (
		<Box p={4} color="purple.50">
			<Heading p={padding} size="md" fontFamily="Klima">
				{title}
			</Heading>
			{links.map((link) =>
				link.url ? (
					<Link key={link.title} href={link.url}>
					<ChakraLink>
						<FooterItem padding={padding} text={link.title} />{' '}
					</ChakraLink>
					</Link>
				) : (
					<FooterItem
						onClick={() => NoPage(toast)}
						key={link.title}
						padding={padding}
						text={link.title}
					/>
				)
			)}
		</Box>
	)
}

function FooterItem(props) {
	const { padding, text } = props
	const { onClick } = props
	return (
		<Text onClick={onClick} fontWeight="500" p={padding}>
			{text}
		</Text>
	)
}

export default Footer
