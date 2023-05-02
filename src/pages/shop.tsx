import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Item } from '@/components/Item';
import styles from '@/styles/Shop.module.scss'

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      window.fetch(`/api/products`)
        .then((res) => res.json())
        .then(setProducts);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <main className={styles.ShopContainer}>
        <h1>SHOP!</h1>
        <div className={styles.ItemsContainer}>
          {products.map((data: any) => <Item key={data.id} data={data} />)}
        </div>
      </main>
    </Layout>
  )
}
