import { Flex, Heading } from '@chakra-ui/react'

export default function Jumbotron() {
	return (
		<Flex
			boxSize="xl"
			width="100%"
			direction="column"
			justify="center"
			align="center">
			<Heading size="4xl">Your social media sucks.</Heading>
		</Flex>
	)
}
