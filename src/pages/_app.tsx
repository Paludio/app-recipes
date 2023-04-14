import '@/styles/globals.css'
import '../styles/login/login.scss'
import '../styles/cardLogo/cardLogo.scss'
import '../styles/input/input.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
