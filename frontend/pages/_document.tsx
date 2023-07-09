import { Head, Html, Main, NextScript } from 'next/document'

import useMeta from '@/hooks/useMeta'

const Document = () => {
  const meta = useMeta()
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Meta data - start */}
        <meta charSet="utf-8" />
        <meta name="keywords" content={meta.keywords} />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />

        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:description" content={meta.description} key="ogdesc" />
        <meta property="og:image" content={meta.image} key="ogimage" />

        <meta property="og:type" content={meta.type} key="ogtype" />
        <meta property="og:site_name" content={meta.site_name} key="ogsitename" />
        <meta property="og:url" content={meta.url} key="ogurl" />

        <meta name="twitter:card" content={meta.twitter_card} key="ogtwittercard" />
        {/* Meta data - end */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
