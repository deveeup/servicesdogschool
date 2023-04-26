import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Loader } from '../../components/Loader';
import { NotFound } from '../../components/NotFound';
import { PetResults } from '../../components/PetResults';

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
      {
        !pet.findPet
          ? <NotFound />
          : <PetResults pet={pet} />
      }
    </Layout>
  )
}
