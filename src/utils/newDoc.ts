import { doc, setDoc } from "firebase/firestore";
import { IDog } from "./types/pet";
import db from "@/db";

export const newDoc = ({
  age,
  animalType,
  birthdate,
  breed,
  certificate,
  expirationDate,
  id,
  image,
  license,
  microchip,
  name,
  owner,
  password,
  registerDate,
  registerState,
  species,
  weight,
}: IDog) =>
  setDoc(doc(db, "pets", id), {
    age,
    animalType,
    birthdate,
    breed,
    certificate,
    expirationDate,
    id,
    image,
    license,
    microchip,
    name,
    owner,
    password,
    registerDate,
    registerState,
    species,
    weight,
  })
    .then(() => true)
    .catch(() => false);
