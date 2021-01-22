import {Flex, Text, Icon, Heading, SimpleGrid} from '@chakra-ui/react'
import { GiPc, GiVideoCamera, GiPhotoCamera } from "react-icons/gi";

export default function Services() {
	return (
		<Flex align="center" direction="column" bg="purple.800" w="100%" p={6}>
			<Heading size="xl" color="purple.50" fontWeight="700">
				WHY US
			</Heading>
			<Text color="white" textAlign="center" size="lg">
				We worry about everything digital - so you can focus on your goals.
			</Text>
			<SimpleGrid w="100%" columns={{ sm: 1, md: 3, lg: 3 }} spacing={2} p={4} color="white">
				<Flex w="100%" align="center" justify="center" direction="column">
					<Icon as={GiPhotoCamera}/>
					<Heading>Photo</Heading>
				</Flex>
				<Flex w="100%" align="center" justify="center" direction="column">
				<Icon as={GiVideoCamera}/>
					<Heading>Video</Heading>
				</Flex>
				<Flex w="100%" align="center" justify="center" direction="column">
				<Icon as={GiPc}/>
					<Heading>Web</Heading>
				</Flex>
			</SimpleGrid>
		</Flex>
	)
}
