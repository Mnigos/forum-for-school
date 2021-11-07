import '../styles/globals.css'
import { VechaiProvider, Button } from '@vechaiui/react'
import { AppProps } from 'next/dist/shared/lib/router/router'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VechaiProvider>
      <Button>Hello Vechai</Button>
      <Component {...pageProps} />
    </VechaiProvider>
  )
}
