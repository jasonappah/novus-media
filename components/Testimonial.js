import { Flex, Box, Avatar, Text, Heading } from '@chakra-ui/react'

export default function Testimonial() {
	return (
		<Flex
			align="center"
			direction="column"
			bg="purple.900"
			w="100%"
			p={6}
			color="purple.800">
			<Box bg="purple.800" borderRadius="15px" w={{sm: "100%", md: "60%", lg: "40%"}} p={4} color="white">
				<Flex>
					<Text fontWeight="500">
						The team over at Novus continues to be of great assistance to our
						company as we develop our internal branding guidelines. Novus Media
						has enabled us to quadruple our online reach and acquire more
						customers.
					</Text>
                    </Flex>
					<Flex align="center" m={2}>
						<Avatar
							name="Jamie South"
							src="https://thispersondoesnotexist.com/image"></Avatar>
						<Flex direction="column" p={2}>
							<Heading size="md">Jamie South</Heading>
							<Text>CEO of Acme Tech</Text>
						</Flex>
					</Flex>
				
			</Box>
		</Flex>
	)
}
