import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import { Store } from '../state/store';

import '../global.css';

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Store>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Store>
);

export default QogitaApp;
