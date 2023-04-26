import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { DogResponse } from './interface';

export default function Search() {
  const {
    query: { id }
  } = useRouter();

  const [pet, setPet] = useState<DogResponse>({
    loading: true,
    findPet: false,
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
      <main>
        <div>
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
