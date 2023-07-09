import cx from 'classnames'
import Image from 'next/image'

import UILink from '@/components/utils/UILink'

type HeaderLogoBase = {
  logo: string
  format?: 'svg' | 'png'
  className?: string
  width: string
  height?: string
  href?: string
}

const HeaderLogo = ({
  logo,
  format = 'svg',
  className,
  width,
  height,
  href = '/',
}: HeaderLogoBase) => {
  return (
    <div className={cx('flex justify-center items-center h-full w-full', className)}>
      <UILink href={href} className={cx('', width, height)}>
        <Image
          style={{ objectFit: 'cover' }}
          fill
          src={`/assets/logo/${logo}.${format}`}
          alt="logo"
          priority
        />
      </UILink>
    </div>
  )
}

export default HeaderLogo
