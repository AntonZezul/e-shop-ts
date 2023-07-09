import cx from 'classnames'
import Image from 'next/image'

import UILink from '@/components/utils/UILink'

type LogoBase = {
  logo: string
  variant?: 'left' | 'right'
  format?: 'svg' | 'png'
  className?: string
  width: string
  height: string
  absolute?: boolean
  href?: string
}

const Logo = ({
  logo,
  variant = 'right',
  format = 'svg',
  className,
  width,
  height,
  absolute = true,
  href = '',
}: LogoBase) => {
  const logoStyle = cx(
    width,
    height,
    className,
    { 'absolute bottom-8': absolute },
    { 'relative inset-0': !absolute },
    {
      'right-5': variant === 'right',
      'left-5': variant === 'left',
    },
  )

  return href ? (
    <UILink href={href} className={logoStyle}>
      <Image fill src={`/assets/logo/${logo}.${format}`} alt="logo" />
    </UILink>
  ) : (
    <span className={logoStyle}>
      <Image fill src={`/assets/logo/${logo}.${format}`} alt="logo" />
    </span>
  )
}

export default Logo
