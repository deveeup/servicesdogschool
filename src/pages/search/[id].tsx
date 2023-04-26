import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import styles from '@/styles/Home.module.css'


export default function Registry() {
  const {
    query: { id }
  } = useRouter();

  const [pet, setPet] = useState({
    findPet: false,
    name: '',
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      window.fetch(`/api/dog/${id}`)
        .then((res) => res.json())
        .then(setPet);
    };
    fetchData();
  }, []);

  if (pet.loading) {
    return <span>Loading</span>
  }
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.center}>
          {
            !pet.findPet
              ? <h1>NOT FOUND</h1>
              : <h1>THE ID IS {pet.name}</h1>
          }

        </div>
      </main>
    </Layout>
  )
}
