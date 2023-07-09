type MetaBase = {
  description: string
  keywords: string
  author: string
  type: string
  site_name: string
  url: string
  title: string
  image: string
  twitter_card: string
}

const AUTHOR = 'Anton Zezul'
const TYPE = 'website'
const URL = ''
const IMAGE = '/meta.jpg'
const TWITTER_CARD = 'summary_large_image'

// https://github.com/i18next/react-i18next/issues/464
const useMeta = () => {
  const meta: MetaBase = {
    description: 'eshop coffee shop',
    // description: t('meta_description'),
    keywords: 'eshop, coffee, shop',
    // keywords: t('meta_keywords'),
    author: AUTHOR,
    type: TYPE,
    site_name: 'Coffee Shop',
    // site_name: t('meta_site_name'),
    url: URL,
    title: 'Coffee Shop',
    // title: t('meta_title'),
    image: IMAGE,
    twitter_card: TWITTER_CARD,
  }
  return meta
}

export default useMeta
