import { SanityImageAssetDocument } from 'next-sanity'

export type FormInputBase = {
  fullname: string
  email: string
  message: string
}

export interface CoffeeProductBase {
  _id: string
  name: string
  roast: 'light' | 'medium' | 'dark'
  flavors: string
  price: number
  description: string
  poster: SanityImageAssetDocument
  language: 'en' | 'sk'
}
