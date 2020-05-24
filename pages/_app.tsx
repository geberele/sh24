import * as React from 'react'
import { AppProps } from 'next/app'
import '../styles/main.scss'

export default function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
