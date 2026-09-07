"use client";

import { searchProducts } from "@/utils/db-actions";
import { Product } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import UserStuff from "../home/user-stuff";
import { useRouter } from "next/navigation";
import SearchedProduct from "./searched-products";
import SearchForm from "../home/search-form";

interface Props {
  searchedProduct: string;
}

export default function SearchPageClient({ searchedProduct }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const searchFunction = async () => {
      setProducts(await searchProducts(searchedProduct));
    };

    searchFunction();
  }, [searchedProduct]);

  const goProductPage = (productId: string) => {
    router.push(`/product/${productId}`);
  }

  return (
    <div>
      <UserStuff />

      <SearchedProduct products={products} goProductPage={goProductPage}></SearchedProduct>
    </div>
  );
}
