import PageWrapper from '@/components/layouts/PageWrapper'
import Header from '@/components/main/Header/Header'
import ContactFooter from '@/components/ui/ContactFooter'
import { CoffeeProductBase } from '@/types/api'
import { getCoffeeItem, getPaths } from '@/utils/api'
import { client, urlFor } from '@/utils/client'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useEffect, useState } from 'react'
import QuantityCounter from '@/components/ui/QuantityCounter'
import { useBasketContext } from '@/context/BasketContext'
import cx from 'classnames'

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const coffee = await getCoffeeItem(params)
  return {
    props: {
      coffee,
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export async function getStaticPaths({ locales }) {
  const coffee: CoffeeProductBase[] = await client.fetch(`*[_type == "coffee"]`)
  const paths = getPaths(coffee, locales)
  return {
    paths: paths,
    fallback: false,
  }
}

type StoreItemPageBase = {
  locale: string
  coffee: CoffeeProductBase
}

const StoreItemPage = ({ locale, coffee }: StoreItemPageBase) => {
  const { t } = useTranslation('common')
  const { increaseCartQuantity, getItemQuantity } = useBasketContext()
  const quantity = getItemQuantity(coffee._id)
  const [isSelected, setIsSelected] = useState<boolean>(!!quantity)

  useEffect(() => {
    quantity === 0 && setIsSelected(false)
  }, [quantity])
  return (
    <PageWrapper locale={locale}>
      <Header />
      <div className="bg-secondary--300 pt-32">
        <div className="w-full h-full flex justify-between relative max-w-screen-2xl mx-auto pb-20">
          <div className="w-3/12">
            <div className="w-[250px] h-max bg-secondary text-primary flex justify-center rounded-b-lg shadow-lg fixed">
              <div className="w-full flex flex-col items-center gap-10 py-4 px-6">
                <span className="text-12 text-center">{coffee.flavors}</span>
                <span className="text-p-md text-center">{coffee.name}</span>
              </div>
            </div>
          </div>
          <div className="w-5/12 flex flex-col items-center gap-32 pt-10">
            <div className="w-full max-w-[620px]">
              <img className="w-full" src={urlFor(coffee.poster).url()} />
            </div>
            <p className="text-16 max-w-2xl leading-8 tracking-wider">{coffee.description}</p>
          </div>
          <div className="w-3/12 pt-32 flex justify-end">
            <div className="w-8/12 h-max bg-primary--100 rounded-sm">
              <div
                className={cx(
                  'min-h-[90px] flex flex-col justify-center gap-2 px-4 border-b border-dashed border-primary',
                  { 'border-none': !isSelected },
                )}
              >
                <span className="text-12 tracking-wider">{t('coffee_details.price')}</span>
                <span className="w-full flex justify-center text-h-md">${coffee.price}</span>
              </div>
              {isSelected && (
                <div className="min-h-[90px] flex justify-between items-center gap-2 px-4">
                  <span className="text-12 tracking-wider">{t('coffee_details.quantity')}</span>
                  <span className="w-full flex justify-end text-h-md">
                    <QuantityCounter coffee={{ ...coffee, quantity }} />
                  </span>
                </div>
              )}
              {!isSelected && (
                <button
                  onClick={() => {
                    setIsSelected(true)
                    increaseCartQuantity({ ...coffee, quantity })
                    // setQuantity(1)
                  }}
                  type="button"
                  className="w-full bg-primary text-secondary text-14 py-3 hover:bg-secondary--100 hover:text-primary transition-all duration-300 rounded-b-sm"
                >{`${t('coffee_details.button_action')} - $${coffee.price}`}</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </PageWrapper>
  )
}

export default StoreItemPage
