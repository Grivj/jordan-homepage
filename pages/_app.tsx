import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
