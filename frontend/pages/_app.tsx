import './css/index.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { BasketProvider } from '@/context/BasketContext'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Coffee Shop</title>
      </Head>
      <BasketProvider>
        <Component {...pageProps} />
      </BasketProvider>
    </>
  )
}

export default appWithTranslation(App)
