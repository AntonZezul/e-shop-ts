import { HomeSectionCardBase } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import cx from 'classnames'

type HomeSectionBase = {
  sectionCard: HomeSectionCardBase
  reverse?: boolean
}

const HomeSection = ({ sectionCard, reverse }: HomeSectionBase) => {
  return (
    <div className={cx('w-full h-max', sectionCard.color || 'bg-secondary--300')}>
      <div
        className={cx('max-w-screen-2xl mx-auto flex items-center justify-between p-12', {
          'flex-row-reverse': reverse,
        })}
      >
        <div className="flex flex-col gap-5">
          <span className="text-h-xl">{sectionCard.title}</span>
          <span className="tracking-wider max-w-xs">{sectionCard.subtitle}</span>
        </div>
        <span className="h-[550px] w-[716px] relative">
          <Image
            style={{ objectFit: 'cover' }}
            src={`/media/${sectionCard.picture}`}
            alt={sectionCard.picture}
            fill
            priority
          />
        </span>
      </div>
    </div>
  )
}

export default HomeSection
