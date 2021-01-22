import {
	Flex,
	Spacer,
	Heading,
    Image,
    Link as ChakraLink, 
    Button,
} from '@chakra-ui/react'


import Link from 'next/link'

export default function MenuBar() {
	return (
		<Flex bg="purple.600" color="white" align="center">
				<Flex align="center">
					<Image
						p={4}
						boxSize="5rem"
						fit="contain"
						src="/logo-transparent-no-text.png"
					/>
					<Heading size="md">Novus Media</Heading>
				</Flex>
			<Spacer />
			<Flex p={4} align="center">
                <Link href="/">
                <ChakraLink pr={4} fontWeight="500">Home</ChakraLink>
                </Link>
                <ChakraLink pr={4} fontWeight="500">About</ChakraLink>
                <ChakraLink pr={4} fontWeight="500">Services</ChakraLink>
				<Button variant="outline">
                    <Link href="/blog">
					<ChakraLink>Blog</ChakraLink>
                    </Link>
				</Button>
			</Flex>
		</Flex>
	)
}
