import type { NextPage, NextPageProps } from 'next'

import Head from 'next/head'

interface AppProps extends NextPageProps {
  title?: string
}

export default function App({
  Component,
  pageProps,{
  title,
  }
}: AppProps) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Default Title'}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}