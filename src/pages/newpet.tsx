import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { newDoc } from "../utils/newDoc";
import { IDog } from "../utils/types/pet";
import styles from '@/styles/NewPet.module.scss';

export default function NewPet() {
  const [newId, setNewId] = useState<string>("");
  const [createButton, setCreateButton] = useState<boolean>(true);
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
          <form id="dogForm" onSubmit={async (e) => {
            e.preventDefault();
            newDoc(dogState)
              .then(() => {
                const form = document?.getElementById("dogForm") as any;
                form?.reset();
                setCreateButton(false);
                setDogState(initialState);
              })
              .catch((e) => console.error(e));

          }}>
            <div>
              <label htmlFor="age">Age</label>
              <input type="text" id="age" required name="age" onChange={(e) => changeDogState({ age: e.target.value })} />
            </div>
            <div>
              <label htmlFor="birthdate">Birthdate</label>
              <input type="text" id="birthdate" required name="birthdate" onChange={(e) => changeDogState({ birthdate: e.target.value })} />
            </div>
            <div>
              <label htmlFor="breed">Breed</label>
              <input type="text" id="breed" required name="breed" onChange={(e) => changeDogState({ breed: e.target.value })} />
            </div>
            <div>
              <label htmlFor="microchip">Microchip</label>
              <input type="text" id="microchip" required name="microchip" onChange={(e) => changeDogState({ microchip: e.target.value })} />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required name="name" onChange={(e) => changeDogState({ name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="owner">Owner</label>
              <input type="text" id="owner" required name="owner" onChange={(e) => changeDogState({ owner: e.target.value })} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" id="password" required name="password" onChange={(e) => changeDogState({ password: e.target.value })} />
            </div>
            <div>
              <label htmlFor="registerState">Register State</label>
              <input type="text" id="registerState" required name="registerState" onChange={(e) => changeDogState({ registerState: e.target.value })} />
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <input type="text" id="weight" required name="weight" onChange={(e) => changeDogState({ weight: e.target.value })} />
            </div>
            <button
              type="submit"
              disabled={!createButton}
              className={!createButton ? styles.disable : ""}
            >
              Create
            </button>
          </form>
        </div>
        {!createButton && (
          <p>Create successfull...</p>
        )}
      </main>

    </Layout>
  )
}
