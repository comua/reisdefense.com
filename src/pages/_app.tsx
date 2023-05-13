import '@/styles/app.css'

import type { AppProps } from 'next/app'

import { Header } from '@/components/layout/Header'
import { DefaultMeta } from '@/components/seo/DefaultMeta'
import { GOTHAM_ROUNDED, INTER } from '@/lib/fonts'

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`

  return (
    <div
      className={`flex w-full flex-col font-primary ${INTER.variable} ${GOTHAM_ROUNDED.variable}`}
    >
      <DefaultMeta canonical={url} />
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default App
