import PageWrapper from '@/components/layouts/PageWrapper'
import Header from '@/components/main/Header/Header'
import ContactFooter from '@/components/ui/ContactFooter'
import ContactForm from '@/components/ui/ContactForm'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import React from 'react'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const ContactPage = ({ locale }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common'])
  return (
    <PageWrapper locale={locale}>
      <Header />
      <div className="h-[70vh] w-full flex bg-secondary--200 pt-32">
        <div className="h-full w-4/5 flex items-center justify-center ">
          <div className="flex flex-col gap-6 max-w-[500px]">
            <p className="text-h-2xl">{t('contact.titlebar.title')}</p>
            <p className="text-16 leading-6 tracking-wider">{t('contact.titlebar.subtitle')}</p>
          </div>
        </div>
        <div className="h-full w-full relative">
          <Image fill src="/media/contact-bg.png" alt="contact-bg" style={{ objectFit: 'cover' }} />
        </div>
      </div>
      <div className="h-[70vh] w-full flex bg-secondary--300">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <span className="text-h-xl">{t('contact_form.title')}</span>
          <ContactForm className="max-w-[650px] h-1/2" />
        </div>
      </div>
      <ContactFooter contactForm={false} />
    </PageWrapper>
  )
}

export default ContactPage
