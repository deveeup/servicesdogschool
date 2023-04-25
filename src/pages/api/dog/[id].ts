import type { NextApiRequest, NextApiResponse } from 'next'
import { getDoc, doc } from "firebase/firestore";
import db from "@/db";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;
  const searchId = id as string;
  const docRef = doc(db, "pets", searchId);
  const docSnap = await getDoc(docRef);

  docSnap.data()
    ? res.status(200).json({
        findPet: true,
        loading: false,
        ...docSnap.data(),
      })
    : res.status(200).json({
        findPet: false,
        loading: false,
    });
}
