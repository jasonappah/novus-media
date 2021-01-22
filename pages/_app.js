import '../styles.css'
import Head from 'next/head'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import MorphTransition from 'nextjs-morph-page'

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
			<Head>
				<title>Novus Media</title>
			</Head>

			<MorphTransition timeout={300} classNames="morph">
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</MorphTransition>
		</>
	)
}

export default App
