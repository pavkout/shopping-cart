import type { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';

import Layout from '../components/Layout';
import { Store } from '../state/store';

import '../global.css';

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ToastProvider autoDismiss={true} placement='bottom-left'>
    <Store>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  </ToastProvider>
);

export default QogitaApp;
