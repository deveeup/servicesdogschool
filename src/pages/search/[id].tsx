import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { IDog } from './interface';
import styles from '@/styles/Home.module.css'


export default function Registry() {
  const {
    query: { id }
  } = useRouter();

  const [pet, setPet] = useState<IDog>({
    findPet: false,
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
              : (
              <>
                <img src={pet.image} alt="" />
                <p>
                  name: {pet.name}
                  <br />
                  owner: {pet.owner}
                  <br />
                  weight: {pet.weight}
                  <br />
                  state: {pet.registerState}
                </p>
              </>
            )
          }
        </div>
      </main>
    </Layout>
  )
}
