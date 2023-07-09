import Image from 'next/image'
import React from 'react'

import FacebookIcon from '@/assets/icons/facebook.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'
import YoutubeIcon from '@/assets/icons/youtube.svg'
import PhoneIcon from '@/assets/icons/phone.svg'
import MailIcon from '@/assets/icons/mail.svg'
import UILink from '@/components/utils/UILink'
import ContactForm from '@/components/ui/ContactForm'
import { useTranslation } from 'next-i18next'

type ContactFooterBase = {
  contactForm?: boolean
}

const ContactFooter = ({ contactForm = true }: ContactFooterBase) => {
  const { t } = useTranslation('common')
  return (
    <div className="w-full px-10 py-10 bg-secondary">
      <div className="w-full h-full flex flex-col">
        <div className="flex items-center justify-between border-b border-primary h-header relative">
          <span>{t('footer.motto')}</span>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <Image src="/assets/logo/logo.png" alt="logo" height={84} width={84} />
          </div>
          <div className="flex gap-4">
            <UILink
              href="https://facebook.com"
              className="w-10 h-10 flex items-center justify-center"
              type="button"
            >
              <FacebookIcon className="w-8 h-8" />
            </UILink>
            <UILink
              href="https://instagram.com"
              className="w-10 h-10 flex items-center justify-center"
              type="button"
            >
              <InstagramIcon className="w-8 h-8" />
            </UILink>
            <UILink
              href="https://twitter.com"
              className="w-10 h-10 flex items-center justify-center"
              type="button"
            >
              <TwitterIcon className="w-8 h-8" />
            </UILink>
            <UILink
              href="https://youtube.com"
              className="w-10 h-10 flex items-center justify-center"
              type="button"
            >
              <YoutubeIcon className="w-8 h-8" />
            </UILink>
          </div>
        </div>
        <div className="flex pt-12 border-b border-primary pb-12">
          {contactForm && (
            <div className="w-1/2 flex flex-col gap-4">
              <span className="text-h-xl">{t('contact_form.title')}</span>
              <ContactForm />
            </div>
          )}
          <div className="w-1/2 flex flex-col gap-4">
            <span className="text-h-md">{t('footer.contact_info_title')}</span>
            <div className="flex gap-3 items-center">
              <MailIcon className="w-8 h-8" />
              <UILink href="mailto:support@shop.com" className="hover:underline underline-offset-4">
                support@shop.com
              </UILink>
            </div>
            <div className="flex gap-3 items-center">
              <PhoneIcon className="w-8 h-8" />
              <UILink href="tel:838-563-4678" className="hover:underline underline-offset-4">
                838-563-4678
              </UILink>
            </div>
          </div>
        </div>
        <div className="pt-10 w-full flex items-center justify-between">
          <span className="text-14">© 2023 COFFEE SHOP, ALL RIGHTS RESERVED</span>
          <span className="text-14">BRATISLAVA, KUCHAJDA</span>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter
