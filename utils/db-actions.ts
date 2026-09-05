"use server";

import { db } from "@/app";
import { productsTable } from "@/schema";
import { sql } from "drizzle-orm";
import { Product } from "./interfaces";

export const searchProducts = async () => {
  const product = "Product";

  const searchResults = await db
    .select()
    .from(productsTable)
    .where(
      sql`to_tsvector('english', ${productsTable.productName}) @@ websearch_to_tsquery('english', ${product})`,
    );

  return searchResults as Product[];
};
