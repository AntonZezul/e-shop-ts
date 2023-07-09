import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import ArrowRightIcon from '@/assets/icons/arrow-right.svg'
import PageWrapper from '@/components/layouts/PageWrapper'
import Button from '@/components/ui/Button'
import { GeneralPageFragment } from '@/types/page'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      page: {
        locale,
      },
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}
interface GenericPageProps {
  page: GeneralPageFragment
}

const UnexpectedPage = ({ page }: GenericPageProps) => {
  const { t } = useTranslation('common')
  return (
    <PageWrapper locale={page?.locale}>
      <div className="flex min-h-screen items-center justify-center bg-secondary">
        <div className="flex w-2/3 flex-col gap-6 pb-32">
          <div className="flex flex-col gap-3">
            <h3 className="text-h3 text-primary">404</h3>
            <h1 className="text-h1 text-primary">{t('unexpected_page.message')}</h1>
          </div>
          <Button text={t('unexpected_page.action')} endIcon={<ArrowRightIcon />} href="/" />
        </div>
      </div>
    </PageWrapper>
  )
}

export default UnexpectedPage
