import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Loader } from '../components/Loader';
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
        <h1>Shopping section</h1>
        <p className={styles.TitleText}>
          - The products shown below are only sold through our trainers and partners.
          <br/>
          - We have 100% availability of the products shown.
          <br/>
          - If you want to buy any of these, you can manage it with your processor (trainer or partner).
          <br/>
          - On many occasions our products are discounted
        </p>
        <div className={styles.ItemsContainer}>
          {!products.length
            ? <Loader />
            : products
              .map((data: any) => <Item key={data.id} data={data} />)
              .sort()
          }
        </div>
      </main>
    </Layout>
  )
}
