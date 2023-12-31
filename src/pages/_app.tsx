import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans--serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transit: 25s;
    color: #000;
  }

  ol, ul {
    list-style: none;
  }
`

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5" />
        <meta
          property="og:type"
          content="website" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
