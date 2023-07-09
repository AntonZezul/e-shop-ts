export const nameToUrl = (name: string) =>
  name.toLowerCase().replaceAll('- ', '').replaceAll(' ', '-')
