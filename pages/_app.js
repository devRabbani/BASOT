import Layout from '../components/layout'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Basot - A Buying And Selling App</title>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
