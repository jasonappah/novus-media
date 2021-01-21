import { Text, Button, Flex } from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function CallToAction() {
	return (
		<Flex
			align="center"
			direction="column"
			bg="purple.100"
			w="100%"
			p={6}
			color="purple.800">
			<Text fontSize="4xl">Upgrade your web presence.</Text>
			<Button
				rightIcon={<ArrowForwardIcon />}
				m={4}
				colorScheme="white"
				variant="outline">
				Get in touch
			</Button>
		</Flex>
	)
}
