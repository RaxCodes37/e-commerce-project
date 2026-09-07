"use client";

import { searchProducts } from "@/utils/db-actions";
import { Product } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import UserStuff from "../home/user-stuff";
import IndividualProduct from "../product/display-individual-product";

interface Props {
  searchedProduct: string;
}

export default function SearchPageClient({ searchedProduct }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const searchFunction = async () => {
      setProducts(await searchProducts(searchedProduct));
    };

    searchFunction();
  }, [searchedProduct]);

  return (
    <div>
      <UserStuff />
      <IndividualProduct product={products} />
    </div>
  );
}
