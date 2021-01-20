import { ChakraProvider } from '@chakra-ui/react'

export default App
function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
