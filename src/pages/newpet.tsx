import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { newDoc } from "../utils/newDoc";
import { IDog } from "../utils/types/pet";
import styles from '@/styles/NewPet.module.scss';

export default function NewPet() {
  const router = useRouter()
  const [newId, setNewId] = useState<string>("");
  useEffect(() => {
    const fetchNewId = async () => {
      window.fetch(`/api/id`)
        .then((res) => res.json())
        .then(setNewId);
    };
    fetchNewId();
    setDogState({
      ...dogState,
      id: newId,
    });
  }, [newId]);

  const date = new Date();
  const initialState: IDog = {
    age: "",
    animalType: "SA",
    birthdate: "",
    breed: "",
    expirationDate: "N/A",
    id: "",
    microchip: "",
    name: "",
    owner: "",
    password: "",
    registerDate: date.toLocaleDateString(),
    registerState: "",
    species: "Dog",
    weight: "",
  };
  const [dogState, setDogState] = useState<IDog>(initialState);
  const changeDogState = (newValue: object) => {
    setDogState({
      ...dogState,
      ...newValue,
    });
  };
  return (
    <Layout>
      <main className={styles.newPet}>
        <div className={styles.inputContainer}>
          <span>SA-{newId}</span>
          <form onSubmit={(e) => {
            e.preventDefault();
            try {
              newDoc(dogState);
              router.push("/");
            } catch (e) {
              console.error(e);
            }
          }}>
            <input type="text" required placeholder="Age" name="age" onChange={(e) => changeDogState({ age: e.target.value })} />
            <input type="text" required placeholder="Birthdate" name="birthdate" onChange={(e) => changeDogState({ birthdate: e.target.value })} />
            <input type="text" required placeholder="Breed" name="breed" onChange={(e) => changeDogState({ breed: e.target.value })} />
            <input type="text" required placeholder="Microchip" name="microchip" onChange={(e) => changeDogState({ microchip: e.target.value })} />
            <input type="text" required placeholder="Name" name="name" onChange={(e) => changeDogState({ name: e.target.value })} />
            <input type="text" required placeholder="Owner" name="owner" onChange={(e) => changeDogState({ owner: e.target.value })} />
            <input type="text" required placeholder="Password" name="password" onChange={(e) => changeDogState({ password: e.target.value })} />
            <input type="text" required placeholder="Register State" name="registerState" onChange={(e) => changeDogState({ registerState: e.target.value })} />
            <input type="text" required placeholder="Weight" name="weight" onChange={(e) => changeDogState({ weight: e.target.value })} />
            <button type="submit">Create</button>
          </form>
        </div>
      </main>

    </Layout>
  )
}
