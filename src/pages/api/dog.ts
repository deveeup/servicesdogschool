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
  const docRef = doc(db, "pets", "uLO3B3ipktLDrNpWooff");
  const docSnap = await getDoc(docRef);

  res.status(200).json(docSnap.data());
}
