import { Layout } from '@/components/Layout';
import { Item } from '@/components/Item';
import styles from '@/styles/Shop.module.scss'

export default function Shop() {
  return (
    <Layout>
      <main className={styles.ShopContainer}>
        <h1>SHOP!</h1>
        <div className={styles.ItemsContainer}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </main>
    </Layout>
  )
}
