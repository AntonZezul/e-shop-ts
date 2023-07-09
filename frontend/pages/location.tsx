import PageWrapper from '@/components/layouts/PageWrapper'
import Header from '@/components/main/Header/Header'
import ContactFooter from '@/components/ui/ContactFooter'
import MapBox from '@/components/ui/MapBox'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Location = ({ locale }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common'])
  return (
    <PageWrapper locale={locale}>
      <Header />
      <div className="h-[70vh] w-full flex bg-secondary--200 pt-32">
        <div className="h-full w-4/5 flex items-center justify-center ">
          <div className="flex flex-col gap-6 max-w-[500px]">
            <p className="text-h-2xl">{t('location.titlebar.title')}</p>
            <p className="text-16 leading-6 tracking-wider">{t('location.titlebar.subtitle')}</p>
          </div>
        </div>
        <div className="h-full w-full relative">
          <Image
            fill
            src="/media/location-bg.jpg"
            alt="location-bg"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <MapBox />
      <ContactFooter />
    </PageWrapper>
  )
}

export default Location
