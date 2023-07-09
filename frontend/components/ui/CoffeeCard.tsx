import UILink from '@/components/utils/UILink'
import { CoffeeProductBase } from '@/types/api'
import { urlFor } from '@/utils/client'
import { nameToUrl } from '@/utils/general'
import React from 'react'

type CoffeeCardBase = {
  coffee: CoffeeProductBase
}

const CoffeeCard = ({ coffee }: CoffeeCardBase) => {
  return (
    <UILink
      href={`/store/${nameToUrl(coffee.name)}`}
      className="flex flex-col gap-3 w-full hover:shadow-xl shadow-md transition-all duration-300"
    >
      <div className="bg-secondary--200 h-[420px] sm:h-[530px]">
        <img className="w-full h-full object-cover" src={urlFor(coffee.poster).url()} />
      </div>
      <div className="flex flex-col gap-3 px-4 py-4">
        <span className="text-p-md">{coffee.name}</span>
        <span className="text-12">{coffee.flavors}</span>
        <span className="text-16-bold">$ {coffee.price}</span>
      </div>
    </UILink>
  )
}

export default CoffeeCard
