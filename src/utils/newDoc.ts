import { doc, setDoc } from "firebase/firestore";
import { IDog } from "./types/pet";
import db from "@/db";

export const newDoc = ({
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
}: IDog) =>
  setDoc(doc(db, "pets", id), {
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
  })
    .then(() => true)
    .catch(() => false);
