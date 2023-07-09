import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const LanguageSwitcher = () => {
  const router = useRouter()
  return (
    <Link
      className="text-20 underline underline-offset-4 decoration-transparent hover:decoration-primary transition-colors duration-200 focus:outline-none focus:decoration-primary"
      href={router.asPath}
      locale={router.locale === 'en' ? 'sk' : 'en'}
    >
      {router.locale === 'en' ? 'SK' : 'EN'}
    </Link>
  )
}

export default LanguageSwitcher
