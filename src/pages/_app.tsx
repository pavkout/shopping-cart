import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import '../global.css';

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default QogitaApp;
