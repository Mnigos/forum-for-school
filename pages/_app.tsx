import '../styles/globals.css'
import { VechaiProvider } from '@vechaiui/react'
import { AppProps } from 'next/dist/shared/lib/router/router'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VechaiProvider>
      <Component {...pageProps} />
    </VechaiProvider>
  )
}
