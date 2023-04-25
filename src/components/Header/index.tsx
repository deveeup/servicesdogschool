import Link from 'next/link';
import Head from 'next/head';
import { URL } from '../../constants';
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
          <Link href={URL.home}>Home</Link>
          <Link href={URL.information}>Info</Link>
          <Link href={URL.registry}>Registry Search</Link>
          <Link href={URL.register}>Register</Link>
          <Link href={URL.validate}>Validate</Link>
        </ul>
      </nav>
    </>
  );
};