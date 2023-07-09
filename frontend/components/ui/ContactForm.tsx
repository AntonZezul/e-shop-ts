import Button from '@/components/ui/Button'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import cx from 'classnames'
import DoneIcon from '@/assets/icons/done.svg'
import { FormInputBase } from '@/types/api'
import { postEmail } from '@/utils/api'
import { useTranslation } from 'next-i18next'

type ContactFormBase = {
  className?: string
}

const ContactForm = ({ className }: ContactFormBase) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputBase>()
  const { t } = useTranslation()
  const [isRecieved, setIsResieved] = useState<boolean>(false)

  const mail = async (body: FormInputBase) => {
    setTimeout(() => setIsResieved(true), 500)
    return await postEmail(body)
  }

  const onSubmit: SubmitHandler<FormInputBase> = (data) => mail(data)

  useEffect(() => {
    isSubmitSuccessful && reset()
  }, [reset, isSubmitSuccessful])

  return (
    <div className={cx('w-full max-w-[512px] h-96 px-5 py-8 bg-secondary--200', className)}>
      {!isRecieved ? (
        <form
          className="h-full justify-center flex flex-col gap-4 px-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <input
              {...register('fullname', { required: t('contact_form.required') })}
              name="fullname"
              className={cx(
                'px-2 py-3 bg-secondary--200 text-primary focus:outline-none border-b border-primary focus:placeholder-gray-600',
                { 'border-error': errors.fullname?.message },
              )}
              placeholder={t('contact_form.fullname')}
            />
            <span className="text-12 text-error">{errors.fullname?.message}</span>
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register('email', {
                required: t('contact_form.required'),
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: t('contact_form.invalid_email'),
                },
              })}
              className={cx(
                'px-2 py-3 bg-secondary--200 text-primary text-opacity-50 focus:outline-none border-b border-primary focus:placeholder-gray-600',
                { 'border-error': errors.fullname?.message },
              )}
              placeholder={t('contact_form.email')}
              name="email"
            />
            <span className="text-12 text-error">{errors.email?.message}</span>
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register('message', { required: t('contact_form.required') })}
              className={cx(
                'px-2 py-3 bg-secondary--200 text-primary focus:outline-none border-b border-primary focus:placeholder-gray-600',
                { 'border-error': errors.fullname?.message },
              )}
              placeholder={t('contact_form.message')}
              name="message"
            />
            <span className="text-12 text-error">{errors.message?.message}</span>
          </div>
          <Button className="mt-6" submit text={t('contact_form.submit')} />
        </form>
      ) : (
        <div className="w-full h-full bg-secondary--200 flex flex-col gap-8 justify-center items-center">
          <span className="text-h-xl">{t('contact_form.success')}</span>
          <span className="w-36 h-36 rounded-full flex justify-center items-center bg-primary">
            <DoneIcon className="w-24 h-24 text-success" />
          </span>
        </div>
      )}
    </div>
  )
}

export default ContactForm
