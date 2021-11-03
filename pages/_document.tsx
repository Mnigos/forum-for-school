import { ServerStyleSheets } from '@material-ui/styles'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { darkTheme } from 'themes'

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const muiSheets = new ServerStyleSheets()
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () => {
        return originalRenderPage({
          enhanceApp: App => props =>
            muiSheets.collect(sheet.collectStyles(<App {...props} />)),
        })
      }

      const initialProps = await Document.getInitialProps(context)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {muiSheets.getStyleElement()}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render = () => (
    <Html lang={this.props.locale}>
      <Head>
        <meta name="theme-color" content={darkTheme.palette.primary.main} />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
