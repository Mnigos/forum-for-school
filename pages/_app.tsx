import '../styles/globals.css'
import { VechaiProvider } from '@vechaiui/react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { Provider } from 'react-redux'

import IdProvider from '~/components/IdProvider'
import { store } from '~/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VechaiProvider>
      <IdProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </IdProvider>
    </VechaiProvider>
  )
}
