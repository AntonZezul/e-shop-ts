import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import PageWrapper from '@/components/layouts/PageWrapper'
import Header from '@/components/main/Header/Header'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import ContactFooter from '@/components/ui/ContactFooter'
import { SubscriptionCardBase } from '@/types/types'
import SubscriptionSection from '@/components/ui/SubscriptionSection'
import HomeSection from '@/components/ui/HomeSection'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Home = ({ locale }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common'])

  const subscriptionCards: SubscriptionCardBase[] = [
    {
      title: t('home.subscription.1.title'),
      subtitle: t('home.subscription.1.subtitle'),
      actionTitle: t('home.subscription.1.action'),
      picture: 'subscription-1',
      link: '/store',
    },
    {
      title: t('home.subscription.2.title'),
      subtitle: t('home.subscription.2.subtitle'),
      actionTitle: t('home.subscription.2.action'),
      picture: 'subscription-2',
      link: '/store',
    },
    {
      title: t('home.subscription.3.title'),
      subtitle: t('home.subscription.3.subtitle'),
      actionTitle: t('home.subscription.3.action'),
      picture: 'subscription-3',
      link: '/store',
    },
  ]

  return (
    <PageWrapper locale={locale}>
      <Header />
      <div className="h-[70vh] w-full flex bg-secondary--200 pt-32">
        <div className="h-full w-4/5 flex items-center justify-center ">
          <div className="flex flex-col gap-6 max-w-[500px]">
            <p className="text-16">{t('home.titlebar.subtitle')}</p>
            <p className="text-h-2xl">{t('home.titlebar.title')}</p>
            <Button text={t('home.titlebar.button_action')} href="/store" />
          </div>
        </div>
        <div className="h-full w-full relative">
          <Image fill src="/media/home-bg.jpg" alt="home-bg" style={{ objectFit: 'cover' }} />
        </div>
      </div>
      <SubscriptionSection subscriptionCards={subscriptionCards} />
      <div className="flex flex-col gap-14 bg-secondary">
        <HomeSection
          sectionCard={{
            title: t('home.sections.1.title'),
            subtitle: t('home.sections.1.subtitle'),
            picture: 'album.jpg',
            color: 'bg-[#D2C6C3]',
          }}
        />
        <HomeSection
          sectionCard={{
            title: t('home.sections.2.title'),
            subtitle: t('home.sections.2.subtitle'),
            picture: 'coffee-gif.gif',
            color: 'bg-[#A9C9E1]',
          }}
          reverse
        />
        <HomeSection
          sectionCard={{
            title: t('home.sections.3.title'),
            subtitle: t('home.sections.3.subtitle'),
            picture: 'breakdown.jpg',
            color: 'bg-[#EEB426]',
          }}
        />
      </div>
      <ContactFooter />
    </PageWrapper>
  )
}

export default Home
