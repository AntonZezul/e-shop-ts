import cx from 'classnames'

import BasketIcon from '@/assets/icons/basket.svg'
import PersonIcon from '@/assets/icons/person.svg'
import SearchIcon from '@/assets/icons/search.svg'

import HeaderLogo from '@/components/ui/Logo/HeaderLogo'
import UILink from '@/components/utils/UILink'
import { useTranslation } from 'next-i18next'
import LanguageSwitcher from '@/components/main/Header/LanguageSwitcher'
import Basket from '@/components/ui/Basket/Basket'
import { useBasketContext } from '@/context/BasketContext'

type HeaderBase = {
  variant?: 'transparent' | 'default'
}

type NavBase = {
  title: string
  url: string
}

const Header = ({ variant = 'default' }: HeaderBase) => {
  const { t } = useTranslation('common')
  const { openBasket, basketQuantity } = useBasketContext()

  const navArray: NavBase[] = [
    { title: t('navigation.home'), url: '/' },
    { title: t('navigation.store'), url: '/store' },
    { title: t('navigation.location'), url: '/location' },
    { title: t('navigation.contact'), url: '/contact' },
  ]
  return (
    <div className="fixed top-0 left-0 z-30 w-full">
      <div
        className={cx(
          'flex flex-col w-full items-center justify-center shadow-2xl relative h-header',
          {
            'bg-secondary': variant === 'default',
            'bg-transparent': variant === 'transparent',
          },
        )}
      >
        <div className="relative">
          <HeaderLogo logo="logo" width="w-[80px]" height="h-[80px]" format="png" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-12 flex items-center gap-4">
          <LanguageSwitcher />
          <button type="button">
            <SearchIcon />
          </button>
          <button type="button">
            <PersonIcon />
          </button>
          <button className="relative" onClick={openBasket} type="button">
            <BasketIcon />
            {basketQuantity > 0 && (
              <span className="absolute -bottom-3 -right-3.5 w-6 h-6 rounded-full bg-primary border-2 border-primary flex justify-center items-end text-12 leading-5 text-secondary">
                {basketQuantity}
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="w-full h-11 bg-primary flex justify-center items-center">
        <ul className="flex text-secondary--100 gap-24">
          {navArray.map((navItem, i) => (
            <li
              key={i}
              className="underline underline-offset-4 decoration-transparent hover:decoration-secondary transition-colors duration-200 focus:outline-none focus:decoration-secondary"
            >
              <UILink href={navItem.url}>{navItem.title}</UILink>
            </li>
          ))}
        </ul>
      </div>
      <Basket />
    </div>
  )
}

export default Header
