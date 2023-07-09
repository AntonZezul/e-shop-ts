import NextLink, { LinkProps } from 'next/link'
import { FC, HTMLProps } from 'react'

const UILink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  ...rest
}) => {
  return (
    <NextLink
      as={as}
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      legacyBehavior
    >
      <a target={href.includes('http') ? '_blank' : ''} {...rest}>
        {children}
      </a>
    </NextLink>
  )
}
export default UILink
