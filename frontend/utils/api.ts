import { CoffeeProductBase, FormInputBase } from '@/types/api'
import { client } from '@/utils/client'
import { nameToUrl } from '@/utils/general'

export const getPaths = (array: CoffeeProductBase[], locales: string[]) => {
  const paths: { params: { id: string | undefined }; locale: string }[] = []
  array?.forEach((item: CoffeeProductBase) => {
    locales.forEach((locale) => {
      paths.push({ params: { id: nameToUrl(item.name) }, locale })
    })
  })
  return paths
}

export const getCoffee = async (): Promise<CoffeeProductBase[]> => {
  const data: CoffeeProductBase[] = await client.fetch(`*[_type == "coffee"]`)
  return data
}

export const getCoffeeItem = async (params): Promise<CoffeeProductBase> => {
  const data: CoffeeProductBase[] = await client.fetch(`*[_type == "coffee"]`)
  return data.find((item) => nameToUrl(item.name) === params.id)
}

export const postEmail = async (body: FormInputBase) => {
  const mailBody: FormInputBase = {
    fullname: body.fullname,
    email: body.email,
    message: body.message,
  }
  const response = await fetch(`/api/sendgrid`, {
    body: JSON.stringify(mailBody),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  const data = await response.json()
  return data
}
