"use client";

import {ProductOnCart } from "@/utils/interfaces";
import CartProductsDisplay from "./cart-products";
import { useEffect, useState } from "react";
import { getProductsOnCart } from "@/utils/db-actions";
import UserStuff from "../home/user-stuff";
import BackButton from "../back-button";

interface Props {
  userId: string;
}

export default function CartPageClient({ userId }: Props) {
  const [products, setProducts] = useState<ProductOnCart[]>([]);

  useEffect(() => {
    const getProductsOnCartFunction = async () => {
      setProducts(await getProductsOnCart(userId));
    };

    getProductsOnCartFunction();
  }, []);

  return (
    <div className="flex">
      <div className="mt-3">
        <BackButton />
        <UserStuff />
      </div>

      <CartProductsDisplay
        products={products}
      />
    </div>
  );
}
