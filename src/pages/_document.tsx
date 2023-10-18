import Document, {
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => {
          return sheet.collectStyles(<App {...props} />)
        }
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          // もともとのstyle
          initialProps.styles,
          // styled-components のstyle
          sheet.getStyleElement(),
        ],
      }
    } catch (error) {
      sheet.seal()
      throw error;
    }
  }
}