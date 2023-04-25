import Link from 'next/link';
import Head from 'next/head';
import { URL, TITLES } from '../../constants';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <Head>
        <title>Service Dog School</title>
        <meta name="description" content="Service Dog School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className={styles.nav}>
        <ul>
          <Link href={URL.home}>{TITLES.home}</Link>
          <Link href={URL.shop}>{TITLES.shop}</Link>
          <Link href={URL.information}>{TITLES.information}</Link>
          <Link href={URL.registry}>{TITLES.registry}</Link>
          <Link href={URL.validate}>{TITLES.validate}</Link>
        </ul>
      </nav>
    </>
  );
};