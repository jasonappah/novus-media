import { Text, Button, Flex, useToast } from '@chakra-ui/react'
import NoPage from './NoPage'

import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function CallToAction() {
	const toast = useToast()
	return (
		<Flex
			align="center"
			direction="column"
			bg="purple.100"
			w="100%"
			p={6}
			color="purple.800">
			<Text textAlign="center" fontSize="4xl">Upgrade your digital presence.</Text>
			<Button
				rightIcon={<ArrowForwardIcon />}
				m={4}
				onClick={()=>{NoPage(toast)}}
				colorScheme="white"
				variant="outline">
				Get in touch
			</Button>
		</Flex>
	)
}
