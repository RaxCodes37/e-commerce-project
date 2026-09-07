"use client";

import { Product, ProductOnCart } from "@/utils/interfaces";
import CartProductsDisplay from "./cart-products";
import { useEffect, useState } from "react";
import { getProductsOnCart } from "@/utils/db-actions";

interface Props {
  userId: string
}

export default function CartPageClient({userId}: Props) {
  const [products, setProducts] = useState<ProductOnCart[]>([]);

  useEffect(() => {
    const getProductsOnCartFunction = async() => {
      setProducts(await getProductsOnCart(userId));
    }

    getProductsOnCartFunction();
  }, []);

  console.log(products)

  return (
    <div>
      <CartProductsDisplay products={products}/>
    </div>
  )
}
