import { Layout } from '@/components/Layout'
import styles from '@/styles/Home.module.css'

export default function Home({ db }: any) {
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
