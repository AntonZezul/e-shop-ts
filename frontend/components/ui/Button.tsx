import cx from 'classnames'
import { ReactNode } from 'react'

import UILink from '@/components/utils/UILink'

interface ButtonBase {
  variant?: 'fill-primary' | 'fill-secondary' | 'outline-primary' | 'outline-secondary'
  size?: 'lg' | 'sm' | 'header'
  className?: string
  disabled?: boolean
  icon?: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
  text?: string
  onPress?: () => void
  href?: string
  submit?: boolean
  radius?: string
  reverseTextTransform?: boolean
  fullWidth?: boolean
}

const Button = ({
  variant = 'fill-primary',
  size = 'lg',
  className,
  startIcon,
  endIcon,
  disabled,
  icon,
  text,
  href,
  submit,
  radius = '',
  fullWidth,
  onPress,
}: ButtonBase) => {
  const buttonStyle = cx(
    'text-btn flex items-center justify-center border-2 border-primary bg-primary text-secondary transition-all transition-colors focus:outline-none',
    className,
    { 'w-full': fullWidth, 'w-fit': !fullWidth },
    {
      'hover:border-primary hover:bg-secondary hover:text-primary focus:bg-secondary focus:border-primary focus:text-primary':
        variant === 'fill-primary',
      'hover:border-secondary hover:bg-transparent hover:text-secondary--100 focus:bg-transparent focus:border-primary--200':
        variant === 'fill-secondary',
      'bg-transparent hover:border-secondary hover:text-secondary--100 focus:border-primary--200':
        variant === 'outline-primary',
      'bg-transparent hover:border-secondary hover:bg-secondary hover:text-secondary--100 focus:bg-primary--200 focus:border-primary--200':
        variant === 'outline-secondary',
    },
    {
      'py-1.5 min-w-[160px] px-8': size === 'sm' && text,
      'py-3 min-w-[200px] px-8': size === 'lg' && text,
      'py-1.5 px-1.5': size === 'sm' && icon,
      'py-3 px-3': size === 'lg' && icon,
      'w-header h-header rounded-none': size === 'header',
      'pointer-events-none cursor-default': disabled,
    },
    { 'justify-between': startIcon || endIcon },
    radius,
  )
  return href ? (
    <UILink className={buttonStyle} href={href}>
      {startIcon}
      {text || icon || ''}
      {endIcon}
    </UILink>
  ) : (
    <button type={submit ? 'submit' : 'button'} className={buttonStyle} onClick={onPress}>
      {startIcon}
      {text && <span>{text}</span>}
      {icon && <span className="flex h-8 w-8 items-center justify-center">{icon}</span>}
      {endIcon}
    </button>
  )
}

export default Button
