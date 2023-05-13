import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

export const INTER = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Wait for font to load
})

export const GOTHAM_ROUNDED = localFont({
  src: '../../public/fonts/gotham-rounded-medium.otf',
  variable: '--font-gotham-rounded',
  display: 'swap', // Wait for font to load
})
