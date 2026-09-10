"use server";

import { db } from "@/app";
import { cartTable, productsTable } from "@/schema";
import { and, eq, sql } from "drizzle-orm";
import { Product, ProductOnCart } from "./interfaces";

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

  return product as Product[];
};

export const addToCart = async (
  productName: string,
  productId: string,
  productPrice: string,
  productDesc: string,
  userId: string,
) => {
  let checkProductCount = await db
    .select({
      productId: cartTable.productOnCartId,
      productCount: cartTable.productCount,
    })
    .from(cartTable)
    .where(
      and(
        eq(cartTable.productOnCartName, productName),
        eq(cartTable.potentialBuyerId, userId),
      ),
    );

  if (checkProductCount.length === 0) {
    await db.insert(cartTable).values({
      productOnCartId: productId,
      productOnCartName: productName,
      productOnCartDesc: productDesc,
      productOnCartPrice: productPrice,
      potentialBuyerId: userId,
    });
  } else if (checkProductCount.length >= 1) {
    await db
      .update(cartTable)
      .set({
        productCount: sql`${cartTable.productCount} + 1`,
      })
      .where(eq(cartTable.productOnCartId, productId));
  }
};

export const getProductsOnCart = async (userId: string) => {
  const products = await db
    .select({
      cartId: cartTable.cartId,
      productId: cartTable.productOnCartId,
      productName: cartTable.productOnCartName,
      productDesc: cartTable.productOnCartDesc,
      productPrice: cartTable.productOnCartPrice,
      productCount: cartTable.productCount,
    })
    .from(cartTable)
    .where(eq(cartTable.potentialBuyerId, userId));

  return products as ProductOnCart[];
};

export const removeFromCart = async (cartId: string) => {
  await db.delete(cartTable).where(eq(cartTable.cartId, cartId));
};

export const decreaseProductCart = async (cartId: string) => {
  let checkProductCount = await db
    .select({
      productCount: cartTable.productCount,
    })
    .from(cartTable)
    .where(eq(cartTable.cartId, cartId));

  if (checkProductCount[0].productCount === 1) {
    await removeFromCart(cartId);
  }

  await db
    .update(cartTable)
    .set({
      productCount: sql`${cartTable.productCount} - 1`,
    })
    .where(eq(cartTable.cartId, cartId));
};

export const increaseProductCart = async (productId: string) => {
  await db
    .update(cartTable)
    .set({
      productCount: sql`${cartTable.productCount} + 1`,
    })
    .where(eq(cartTable.productOnCartId, productId));
};
