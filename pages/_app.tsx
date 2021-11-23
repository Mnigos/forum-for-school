import '../styles/globals.css'
import { VechaiProvider } from '@vechaiui/react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { Provider } from 'react-redux'

import { store } from '~/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VechaiProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </VechaiProvider>
  )
}
