import useLocalStorage from '@/hooks/useLocalStorage'
import { BasketStateBase } from '@/types/basket'
import React, { ReactNode, createContext, useContext, useState } from 'react'

type BasketProviderBase = {
  children: ReactNode
}

type BasketContext = {
  isOpen: boolean
  openBasket: () => void
  closeBasket: () => void
  basketItems: BasketStateBase[]
  basketQuantity: number
  totalPrice: number
  getItemQuantity: (id: string) => number
  removeFromBasket: (id: string) => void
  increaseCartQuantity: (coffee: BasketStateBase) => void
  decreaseCartQuantity: (coffee: BasketStateBase) => void
}

const BasketContext = createContext({} as BasketContext)

export const useBasketContext = () => useContext(BasketContext)

export const BasketProvider = ({ children }: BasketProviderBase) => {
  const [basketItems, setBasketItems] = useLocalStorage('basket', [])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openBasket = () => setIsOpen(true)
  const closeBasket = () => setIsOpen(false)

  const basketQuantity = basketItems?.reduce((quantity, item) => item.quantity + quantity, 0)

  const totalPrice = basketItems?.reduce(
    (quantity, item) => item.price * item.quantity + quantity,
    0,
  )

  const getItemQuantity = (id: string) =>
    basketItems?.find((item) => item._id === id)?.quantity || 0

  const increaseCartQuantity = (coffee: BasketStateBase) => {
    setBasketItems((currItems) => {
      if (currItems.find((item) => item._id === coffee._id) == null) {
        return [...currItems, { ...coffee, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item._id === coffee._id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromBasket = (id: string): void => {
    setBasketItems((prev) => {
      return prev.filter((item) => item._id !== id)
    })
  }

  const decreaseCartQuantity = (coffee: BasketStateBase) => {
    setBasketItems((currItems) => {
      if (currItems.find((item) => item._id === coffee._id)?.quantity === 0) {
        removeFromBasket(coffee._id)
      } else if (currItems.find((item) => item._id === coffee._id)?.quantity === 1) {
        return currItems.filter((item) => item._id !== coffee._id)
      } else {
        return currItems.map((item) => {
          if (item._id === coffee._id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <BasketContext.Provider
      value={{
        isOpen,
        openBasket,
        closeBasket,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromBasket,
        getItemQuantity,
        basketItems,
        basketQuantity,
        totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}
