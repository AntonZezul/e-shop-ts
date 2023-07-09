import imageUrlBuilder from '@sanity/image-url'
import { SanityImageAssetDocument, createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'd81r9q6v',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageAssetDocument) => builder.image(source)
