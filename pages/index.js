import Head from 'next/head'
import { Text, Box, Link, SimpleGrid, Button, Flex } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
export default function Home() {
	return (
		<div>
			<Head>
				<title>Novus Media</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<CallToAction />
			<Footer />
		</div>
	)
}

function Footer() {
	return (
		<Box bg="purple.900" p={8}>
			<SimpleGrid columns={4} spacing={10}>
				<Box bg="purple.100" p={4} height="80px">Footer Submenu</Box>
				<Box bg="purple.100" p={4} height="80px">Footer Submenu</Box>
				<Box bg="purple.100" p={4} height="80px">Footer Submenu</Box>
				<Box bg="purple.100" p={4} height="80px">Footer Submenu</Box>
			</SimpleGrid>
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
		</Box>
	)
}

function CallToAction() {
	return (
		<Flex align="center" direction="column" bg="purple.100" w="100%" p={12} color="purple.800">
				<Text fontSize="5xl">
					Upgrade your web presence.
				</Text>
				<Button m={4} colorScheme="white" variant="outline">
					Get in touch
				</Button>
		</Flex>
	)
	}