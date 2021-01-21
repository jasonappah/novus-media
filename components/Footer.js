import { Text, Box, Link, SimpleGrid, Heading, Image } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

function Footer() {
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
					title="Company"
					links={[
						{ title: 'Blog', url: '/blog' },
						{ title: 'Team' },
						{ title: 'Finances' },
						{ title: 'About' },
					]}
				/>
				<FooterCol
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
					title="Why Novus"
					links={[
						{ title: 'Compare Novus to Glide Design' },
						{ title: 'Compare Novus to Rock Candy Media' },
						{ title: 'Compare Novus to Workhorse Marketing' },
					]}
				/>

				<FooterCol
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
				Copyright © {new Date().getFullYear()}{' '}
				<Link href="https://jasonaa.me" isExternal>
					Jason Antwi-Appah <ExternalLinkIcon mx="2px" />
				</Link>{' '}
				|{' '}
				<Link href="https://jasonaa.me/g/novus-media" isExternal>
					View source on GitHub <ExternalLinkIcon mx="2px" />
				</Link>
			</Text>
		</Box>
	)
}

function FooterCol(props) {
	const padding = 2
	const { links, title } = props
	return (
		<Box p={4} color="purple.50">
			<Heading p={padding} size="md" fontFamily="Klima">
				{title}
			</Heading>
			{links.map((link) =>
				link.url ? (
					<Link key={link.title} href={link.url}>
						<FooterItem padding={padding} text={link.title} />{' '}
					</Link>
				) : (
					<FooterItem key={link.title} padding={padding} text={link.title} />
				)
			)}
		</Box>
	)
}

function FooterItem(props) {
	const { padding, text } = props
	return (
		<Text fontWeight="500" p={padding}>
			{text}
		</Text>
	)
}

export default Footer
