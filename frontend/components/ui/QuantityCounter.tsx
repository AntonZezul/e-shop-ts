import PlusIcon from '@/assets/icons/plus.svg'
import MinusIcon from '@/assets/icons/minus.svg'
import { BasketStateBase } from '@/types/basket'
import { useBasketContext } from '@/context/BasketContext'

type QuantityCounterBase = {
  coffee: BasketStateBase
}

const QuantityCounter = ({ coffee }: QuantityCounterBase) => {
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } = useBasketContext()
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => decreaseCartQuantity(coffee)}
        type="button"
        className="w-9 h-9 p-1 text-h-md flex justify-center items-center"
      >
        <MinusIcon className="w-8 h-8 text-primary" />
      </button>
      <div className="w-9 h-9 p-1 flex justify-center items-center text-14-bold text-primary bg-white">
        {getItemQuantity(coffee?._id)}
      </div>
      <button
        onClick={() => increaseCartQuantity(coffee)}
        type="button"
        className="w-9 h-9 p-1 text-h-md flex justify-center items-center"
      >
        <PlusIcon className="w-8 h-8 text-primary" />
      </button>
    </div>
  )
}

export default QuantityCounter
