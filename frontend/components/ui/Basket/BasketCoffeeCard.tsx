import QuantityCounter from '@/components/ui/QuantityCounter'
import { BasketStateBase } from '@/types/basket'
import { urlFor } from '@/utils/client'
import DeleteIcon from '@/assets/icons/delete.svg'
import React from 'react'
import { useBasketContext } from '@/context/BasketContext'
import cx from 'classnames'
import UILink from '@/components/utils/UILink'
import { nameToUrl } from '@/utils/general'

type BasketCoffeeCardBase = {
  coffee?: BasketStateBase
  index: number
}

const BasketCoffeeCard = ({ coffee, index }: BasketCoffeeCardBase) => {
  const { removeFromBasket, basketItems, closeBasket } = useBasketContext()
  return (
    <div
      className={cx('w-full h-40 flex border-b border-dashed border-primary gap-10', {
        'border-none': basketItems.length === index + 1,
      })}
    >
      <div className="h-full flex items-center">
        <div className="h-3/4">
          {coffee?.poster && (
            <img className="w-full h-full object-cover" src={urlFor(coffee?.poster)?.url()} />
          )}
        </div>
      </div>
      <div className="h-full flex items-center w-full">
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <UILink className="w-2/3" href={`/store/${nameToUrl(coffee.name)}`}>
              <a
                className="text-p-base pl-1 underline underline-offset-4 decoration-transparent hover:decoration-primary transition-colors duration-200 focus:outline-none"
                onClick={closeBasket}
              >
                {coffee.name}
              </a>
            </UILink>
            <button type="button" onClick={() => removeFromBasket(coffee._id)}>
              <DeleteIcon className="w-6 h-6 text-error" />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <QuantityCounter coffee={coffee} />
            <span className="text-20">$ {coffee.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketCoffeeCard
