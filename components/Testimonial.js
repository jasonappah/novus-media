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
			<Box
				bg="purple.800"
				borderRadius="15px"
				w={{ sm: '100%', md: '60%', lg: '30%' }}
				p={4}
				color="white">
				<Flex>
					<Text fontWeight="500">
						The team over at Novus continues to be of great assistance to us as
						we develop our website, socials, and branding guidelines. Novus
						Media has enabled us to quadruple our online reach in just a few
						months and we've increased our customer acquisition rate by 2x.
					</Text>
				</Flex>
				<Flex align="center" m={2}>
					<Avatar
						name="Jamie South"
						src="https://thispersondoesnotexist.com/image"
					/>
					<Flex direction="column" p={2}>
						<Heading size="md">Jamie South</Heading>
						<Text>Founder/CEO, Acme Tech</Text>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	)
}
