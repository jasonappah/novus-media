import '../styles.css'
import Head from 'next/head'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	styles: {
		global: {
			body: {
				fontFamily: 'Klima',
			},
		},
	},
})

function App({ Component, pageProps }) {
	return (
		<>
		<Head><title>Novus Media</title></Head>

		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
		</>
	)
}

export default App
