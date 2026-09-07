"use client";

import { useEffect, useState } from "react";
import SearchForm from "./search-form";

import { useRouter } from "next/navigation";
import { Product } from "@/utils/interfaces";
import { getProducts } from "@/utils/db-actions";
import UserStuff from "./user-stuff";
import Products from "./products";

export default function HomePageClient() {
  const router = useRouter();
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProductsFunction = async () => {
      try {
        setAllProducts(await getProducts());
      } catch (error) {
        console.error(error);
      }
    };

    getProductsFunction();
  }, []);

  const goSearch = async () => {
    if (searchProduct.trim() === "") return;

    router.push(`/search?q=${encodeURIComponent(searchProduct)}`);
    setSearchProduct("");
  };

  const goProductPage = (productId: string) => {
    router.push(`/product/${productId}`);
  }

  return (
    <div className="flex flex-col items-center">
      <UserStuff/>

      <SearchForm
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct}
        goSearch={goSearch}
      />

      <Products products={allProducts} goProductPage={goProductPage}/>
    </div>
  );
}
