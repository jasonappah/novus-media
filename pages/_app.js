import '../styles.css'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	styles: {
	  global: {
		body: {
		  fontFamily: "Klima"
		},
	  },
	},
  })
  


function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default App