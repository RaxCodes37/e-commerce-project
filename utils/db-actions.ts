"use server";

import { db } from "@/app";
import { cartTable, productsTable } from "@/schema";
import { eq, sql } from "drizzle-orm";
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

  return products as Product[];
};

export const getIndividualProduct = async (productId: string) => {
  const product = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.productId, productId));

  return product as Product[]
};

export const addToCart = async (productName: string, productId: string, productPrice: string, productDesc: string, userId: string) => {
  await db.insert(cartTable).values({
    productOnCartId: productId,
    productOnCartName: productName,
    productOnCartDesc: productDesc,
    productOnCartPrice: productPrice,
    potentialBuyerId: userId
  })
}