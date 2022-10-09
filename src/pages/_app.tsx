import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Kennet Vuong - Vuong.it</title>
        <meta name="description" content="Personal web site for Kennet Vuong" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
