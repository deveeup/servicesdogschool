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
      <h1>New pet</h1>
    </Layout>
  )
}
