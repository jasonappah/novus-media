import { Flex, Heading } from '@chakra-ui/react'


export default function Jumbotron(props) {
	const {title} = props
	return (
		<Flex
			color="white"
			bg="purple.600"
			boxSize="xl"
			width="100%"
			direction="column"
			justify="center"
			align="center">
				
			<Heading size="4xl">
				{title ? title : "Build a digital presence that makes an impact."}
			</Heading>
		</Flex>
	)
}
