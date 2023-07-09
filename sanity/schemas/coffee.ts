import {defineField} from 'sanity'

export default {
  name: 'coffee',
  type: 'document',
  title: 'Coffee',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'roast',
      type: 'string',
      title: 'Roast',
    },
    {
      name: 'flavors',
      type: 'string',
      title: 'Flavors',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'poster',
      type: 'image',
      title: 'Poster',
    },
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: false,
    }),
  ],
}
