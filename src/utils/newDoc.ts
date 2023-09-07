import { doc, setDoc } from "firebase/firestore";
import { IDog } from "./types/pet";
import db from "@/db";

export const newDoc = ({
  age,
  animalType,
  birthdate,
  breed,
  expirationDate,
  microchip,
  name,
  id,
  owner,
  password,
  registerDate,
  registerState,
  species,
  weight,
}: IDog) =>
  setDoc(doc(db, "testcollection", id), {
    age,
    animalType,
    birthdate,
    breed,
    expirationDate,
    id,
    microchip,
    name,
    owner,
    password,
    registerDate,
    registerState,
    species,
    weight,
  });
