import type { AppProps } from 'next/app';
import db from '@/db';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} db={db} />
}
