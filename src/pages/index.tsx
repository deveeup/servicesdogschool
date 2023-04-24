import { useEffect } from 'react';
import { Layout } from '@/components/Layout'
import styles from '@/styles/Home.module.css'

export default function Home({ db }: any) {
  useEffect(() => {
    const fetchData = async () => {
      window.fetch('api/dog')
        .then((res) => res.json())
        .then(console.log);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>Services Dog School</h1>
        </div>
      </main>
    </Layout>
  )
}
