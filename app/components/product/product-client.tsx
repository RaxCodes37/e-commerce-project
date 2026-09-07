"use client";

import { getIndividualProduct } from "@/utils/db-actions";
import { Product } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import IndividualProduct from "./display-individual-product";
import UserStuff from "../home/user-stuff";

interface Props {
  productId: string;
}

export default function ProductPageClient({ productId }: Props) {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      setProduct(await getIndividualProduct(productId));
    };

    getProduct();
  }, []);

  return (
    <div>
      <UserStuff />
      <IndividualProduct product={product} />
    </div>
  );
}
