import { CSSProperties, FC, PropsWithChildren } from 'react'

import clsxm from '@/lib/clsxm'

interface LayoutProps {
  className?: string
  style?: CSSProperties
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, className, style }) => {
  return (
    <div
      className={clsxm('relative flex min-h-screen flex-col items-center pt-header', className)}
      style={style}
    >
      {children}
    </div>
  )
}
