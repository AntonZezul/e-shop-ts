import Image from 'next/image'
import React from 'react'

type IconBase = {
  width?: number
  height?: number
  icon: string
  className?: string
}
// Useless component, but temporary necessary
const Icon = ({ width = 32, height = 32, icon = '', className }: IconBase) => {
  return (
    <Image
      className={className}
      src={`/icons/${icon}.svg`}
      width={width}
      height={height}
      alt={`${icon}-alt`}
    />
  )
}

export default Icon
