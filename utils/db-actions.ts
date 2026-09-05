"use server";

import { db } from "@/app";
import { productsTable } from "@/schema";
import { sql } from "drizzle-orm";
import { Product } from "./interfaces";

export const searchProducts = async (productName: string) => {
  const searchResults = await db
    .select()
    .from(productsTable)
    .where(
      sql`to_tsvector('english', ${productsTable.productName}) @@ websearch_to_tsquery('english', ${productName})`,
    );

  return searchResults as Product[];
};

export const getProducts = async () => {
  const products = await db.select().from(productsTable);

  return products as Product[]
};
