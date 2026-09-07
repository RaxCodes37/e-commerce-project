"use client";

import { Product, ProductOnCart } from "@/utils/interfaces";
import CartProductsDisplay from "./cart-products";
import { useEffect, useState } from "react";
import { getProductsOnCart, removeFromCart } from "@/utils/db-actions";
import e from "cors";

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

  const removeFromCartFunction = async(cartId: string) => {  
    setProducts(products.filter(product => product.cartId !== cartId));

    try {
      await removeFromCart(cartId);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <CartProductsDisplay products={products} removeFromCartFunction={removeFromCartFunction}/>
    </div>
  )
}
