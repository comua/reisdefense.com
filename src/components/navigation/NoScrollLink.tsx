import Link, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'

interface Props extends LinkProps {
  children: ReactNode
  className?: string
}

export const NoScrollLink: FC<Props> = ({ children, href, passHref, className, shallow }) => (
  <Link href={href} passHref={passHref} scroll={false} className={className} shallow={shallow}>
    {children}
  </Link>
)
