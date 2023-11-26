import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux';
import './index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
