import type { NextApiRequest, NextApiResponse } from "next";
import { collection, query, getDocs } from "firebase/firestore";
import db from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let allData: any = [];

  const q = query(collection(db, "products"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => allData.push(doc.data()));

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");

  return res.status(200).json([
    ...allData,
  ]);
}
