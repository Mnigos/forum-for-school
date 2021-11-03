import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { memo, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import { darkTheme } from '~/themes'

const App = memo<AppProps>(({ Component, pageProps }) => {
  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove()
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
})

export default App
