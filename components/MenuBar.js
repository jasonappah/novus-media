import {
	Flex,
	Spacer,
	Heading,
	Image,
	Link as ChakraLink,
	Button,
	useBreakpointValue,
	useToast,
} from '@chakra-ui/react'
import NoPage from './NoPage'
import Link from 'next/link'

export default function MenuBar() {
	const display = useBreakpointValue({base:"none", sm: "block", md: "block", lg: "block" })
	const toast = useToast()
	return (
		<Flex bg="purple.600" color="white" align="center">
			<Link href="/">
				<ChakraLink>
				<Flex align="center">
					<Image
						p={4}
						boxSize="5rem"
						fit="contain"
						src="/logo-transparent-no-text.png"
					/>
					<Heading display={display} size="md">Novus Media</Heading>
					
				</Flex>
				</ChakraLink>
			</Link>
			<Spacer />
			<Flex p={4} align="center">
				<Link href="/">
					<ChakraLink pr={4} fontWeight="500">
						Home
					</ChakraLink>
				</Link>

				<ChakraLink onClick={() => NoPage(toast)} pr={4} fontWeight="500">
					About
				</ChakraLink>
				<ChakraLink onClick={() => NoPage(toast)} pr={4} fontWeight="500">
					Services
				</ChakraLink>

				<Link href="/blog">
					<Button variant="outline">Blog</Button>
				</Link>
			</Flex>
		</Flex>
	)
}
