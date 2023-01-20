import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { GlobalStyle }  from '../styles/global'
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </SessionProvider> 
  )
  
}

