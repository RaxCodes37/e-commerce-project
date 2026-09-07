"use client";

import { addToCart, getIndividualProduct } from "@/utils/db-actions";
import { Product } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import IndividualProduct from "./display-individual-product";
import UserStuff from "../home/user-stuff";
import BackButton from "../back-button";

interface Props {
  productId: string;
  userId: string;
}

export default function ProductPageClient({ productId, userId }: Props) {
  const [product, setProduct] = useState<Product[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const getProduct = async () => {
      setProduct(await getIndividualProduct(productId));
    };

    getProduct();
  }, []);

  const addToCartFunction = async (
    productName: string,
    productId: string,
    productPrice: string,
    productDesc: string,
  ) => {
    try {
      await addToCart(
        productName,
        productId,
        productPrice,
        productDesc,
        userId,
      );
      setMessage("Item added to cart successfully!");
    } catch (error) {
      console.error(error);
      setMessage(`Error adding item to cart, please try again later...`);
    }
  };

  return (
    <div>
      <div className="flex mt-3">
        <BackButton />
        <UserStuff />
      </div>

      <IndividualProduct
        product={product}
        addToCartFunction={addToCartFunction}
      />

      {message.trim() === "" ? (
        <div></div>
      ) : (
        <div className="flex justify-center mt-4">
          <p id="message">{message}</p>
        </div>
      )}
    </div>
  );
}
