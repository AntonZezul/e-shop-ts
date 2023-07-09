import Button from '@/components/ui/Button'
import { SubscriptionCardBase } from '@/types/types'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React from 'react'

type SubscriptionSectionBase = {
  subscriptionCards: SubscriptionCardBase[]
}

const SubscriptionSection = ({ subscriptionCards }: SubscriptionSectionBase) => {
  const { t } = useTranslation('common')
  return (
    <div className="w-full h-max py-16 bg-secondary">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-12">
        <h2 className="text-h-2xl text-center">{t('home.subscription.title')}</h2>
        <p className="text-h-sm tracking-wider text-center">{t('home.subscription.subtitle')}</p>
        <div className="w-full h-full flex gap-8">
          {subscriptionCards.map((card, i) => (
            <div key={i} className="flex flex-col w-full h-full gap-6">
              <span className="h-96 w-full relative">
                <Image
                  style={{ objectFit: 'cover' }}
                  src={`/media/${card.picture}.png`}
                  alt={card.picture}
                  fill
                  priority
                />
              </span>
              <div className="flex flex-col gap-3">
                <span className="text-p-md">{card.title}</span>
                <span className="text-p-sm tracking-wider">{card.subtitle}</span>
                <Button text={card.actionTitle} className="mt-5" href={card.link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubscriptionSection
