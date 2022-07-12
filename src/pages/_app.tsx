import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/Layout';
import { Store } from '../state/store';

import '../global.css';

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Store>
    <Layout>
      <Head>
        <title>Pavlos Koutoglou</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  </Store>
);

export default QogitaApp;
