import Layout from '../components/layout'
import { useState } from 'react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [catClicked, setCatClicked] = useState(false)
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
