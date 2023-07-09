import PageWrapper from '@/components/layouts/PageWrapper'
import Header from '@/components/main/Header/Header'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState } from 'react'
import { CoffeeProductBase } from '@/types/api'
import CoffeeCard from '@/components/ui/CoffeeCard'
import ContactFooter from '@/components/ui/ContactFooter'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import cx from 'classnames'
import { getCoffee } from '@/utils/api'
import { useTranslation } from 'next-i18next'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const coffee = await getCoffee()
  return {
    props: {
      coffee,
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

type StorePageBase = {
  locale: string
  coffee: CoffeeProductBase[]
}

type InputRangeBase = {
  min: number
  max: number
}

const StorePage = ({ locale, coffee }: StorePageBase) => {
  const { t } = useTranslation('common')
  const [roastSelect, setRoastSelect] = useState('')
  const [areaRange, setAreaRange] = useState<InputRangeBase>({ min: 10, max: 50 })

  const filteredCoffee = coffee
    ?.filter((item) => (!roastSelect ? true : item.roast.toLowerCase() === roastSelect))
    ?.filter(
      (item) =>
        areaRange.min <= item.price && areaRange.max >= item.price && item.language === locale,
    )
  return (
    <PageWrapper locale={locale}>
      <Header />
      <div className="bg-secondary pt-32">
        <div className="max-w-screen-2xl mx-auto w-full px-4 md:px-16 2md:px-4">
          <div className="w-full py-12 flex flex-col gap-10 border-b border-primary">
            <div className="text-h-2xl">
              {roastSelect === ''
                ? `${t('coffee_filter.selector.all').toUpperCase()} ${t('coffee_filter.title')}`
                : `${roastSelect.toUpperCase()} ${t('coffee_filter.title')}`}
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5">
                <span className="text-primary">{t('coffee_filter.selector.label')}</span>
                <select
                  className="w-32 h-10 px-4 outline-none bg-primary text-secondary"
                  onChange={(e) => setRoastSelect(e.target.value)}
                >
                  <option value="">{t('coffee_filter.selector.all')}</option>
                  <option value={t('coffee_filter.selector.light').toLowerCase()}>
                    {t('coffee_filter.selector.light')}
                  </option>
                  <option value={t('coffee_filter.selector.medium').toLowerCase()}>
                    {t('coffee_filter.selector.medium')}
                  </option>
                  <option value={t('coffee_filter.selector.dark').toLowerCase()}>
                    {t('coffee_filter.selector.dark')}
                  </option>
                </select>
              </div>
              <div className="flex items-center gap-5 w-66">
                <span className="text-primary">{t('coffee_filter.input_range.label')}</span>
                <InputRange
                  classNames={{
                    track: 'bg-primary h-0.5',
                    activeTrack: 'bg-red',
                    disabledInputRange: '',
                    inputRange: 'relative w-full',
                    labelContainer: 'relative top-8 -left-2',
                    maxLabel: 'hidden',
                    minLabel: 'hidden',
                    slider:
                      'w-5 h-5 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary transition-all duration-100',
                    sliderContainer: 'absolute -top-2.5',
                    valueLabel: 'text-primary',
                  }}
                  minValue={10}
                  maxValue={50}
                  value={areaRange}
                  onChange={(value: InputRangeBase) => setAreaRange(value)}
                />
              </div>
            </div>
          </div>
          <div
            className={cx('grid gap-10 py-12', {
              'grid-cols-1 2md:grid-cols-2 2xl:grid-cols-3': filteredCoffee.length > 0,
              'grid-cols-1': filteredCoffee.length < 1,
            })}
          >
            {filteredCoffee.length > 0 ? (
              filteredCoffee?.map((item) => <CoffeeCard key={item._id} coffee={item} />)
            ) : (
              <div className="h-[800px] w-full flex justify-center text-h-2xl text-center">
                {t('coffee_filter.not_found')}
              </div>
            )}
          </div>
        </div>
      </div>
      <ContactFooter />
    </PageWrapper>
  )
}

export default StorePage
