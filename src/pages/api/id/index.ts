import type { NextApiRequest, NextApiResponse } from "next";
import { collection, query, getDocs } from "firebase/firestore";
import db from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let allData: any = [];

  const q = query(collection(db, "pets"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => allData.push(doc.data()));

  const lastItem = allData.length - 1;

  const lastId = allData[lastItem].id;

  const arraySplit = lastId.split('-');
  const newId = Number(arraySplit[1]) + 1;

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");

  return res.status(200).json(String(newId));
}
