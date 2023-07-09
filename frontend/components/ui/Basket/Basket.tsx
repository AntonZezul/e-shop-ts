import React from 'react'
import cx from 'classnames'
import CloseIcon from '@/assets/icons/close.svg'
import { useTranslation } from 'next-i18next'
import BasketCoffeeCard from '@/components/ui/Basket/BasketCoffeeCard'
import { useBasketContext } from '@/context/BasketContext'
import Button from '@/components/ui/Button'

const Basket = () => {
  const { t } = useTranslation('common')
  const { basketItems, isOpen, closeBasket, basketQuantity, totalPrice } = useBasketContext()

  return (
    <div className="flex">
      <div
        className={cx(
          'w-[528px] h-screen fixed top-0 right-0 bg-secondary--400 z-30 transition-all duration-700 flex flex-col justify-between',
          {
            'translate-x-0': isOpen,
            'translate-x-full': !isOpen,
          },
        )}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <div className="w-full px-5 py-2.5 flex items-center justify-between border-b border-black/25">
            <div className="flex gap-4 items-center">
              <span className="text-h-xl">{t('basket.title')}</span>
              <span className="w-9 h-9 p-1 flex items-center justify-center rounded-full border border-primary">
                {basketQuantity}
              </span>
            </div>
            <button onClick={closeBasket} type="button" className="">
              <CloseIcon className="w-8 h-8" />
            </button>
          </div>
          <div className="h-full flex flex-col px-5">
            {basketItems?.map((item, index) => (
              <BasketCoffeeCard key={item._id} coffee={item} index={index} />
            ))}
          </div>
        </div>
        <div className="w-full h-40 bg-secondary--500 text-secondary flex flex-col items-center justify-between px-12 py-5">
          <div className="w-full flex justify-between items-center">
            <span className="text-20 text-primary">{t('basket.total')}</span>
            <span className="text-20 text-primary">$ {totalPrice}</span>
          </div>
          <Button text={t('basket.check_out')} size="sm" fullWidth />
        </div>
      </div>
      {isOpen && (
        <div
          onClick={closeBasket}
          className="w-full h-full fixed top-0 right-0 bg-black/40 z-20 cursor-pointer"
        />
      )}
    </div>
  )
}

export default Basket
