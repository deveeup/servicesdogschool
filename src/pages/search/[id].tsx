import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Loader } from '../../components/Loader';
import styles from '@/styles/Home.module.css'

interface IDog {
  age?: string;
  animalType?: string;
  birthdate?: string;
  breed?: string;
  expirationDate?: string;
  findPet: boolean;
  id?: string;
  image?: string;
  loading: boolean;
  name?: string;
  owner?: string;
  registerDate?: string;
  registerState?: string;
  species?: string;
  weight?: string;
}

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
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.center}>
          {
            !pet.findPet
              ? <h1>NotFound</h1>
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
