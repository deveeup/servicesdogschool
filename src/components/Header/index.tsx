import Link from 'next/link';
import Head from 'next/head';
import { URL, TITLES } from '../../constants';
import styles from './Header.module.scss';

export const Header = ({ activeTab }: any) => {
  return (
    <>
      <Head>
        <title>Service Dog School</title>
        <meta name="description" content="Service Dog School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className={styles.nav}>
        <ul>
          <Link
            href={URL.home}
            className={activeTab === URL.home ? styles.enable : styles.disable}
          >
            {TITLES.home}
          </Link>
          <Link
            href={URL.shop}
            className={activeTab === URL.shop ? styles.enable : styles.disable}
          >
            {TITLES.shop}
          </Link>
          <Link
            href={URL.information}
            className={activeTab === URL.information ? styles.enable : styles.disable}
          >
            {TITLES.information}
          </Link>
          <Link
            href={URL.registry}
            className={activeTab === URL.registry ? styles.enable : styles.disable}
          >
            {TITLES.registry}
          </Link>
          <Link
            href={URL.validate}
            className={activeTab === URL.validate ? styles.enable : styles.disable}
          >
            {TITLES.validate}
          </Link>
        </ul>
      </nav>
    </>
  );
};