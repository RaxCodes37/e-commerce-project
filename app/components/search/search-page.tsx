"use client"

import { searchProducts } from "@/utils/db-actions";
import { Product } from "@/utils/interfaces";
import { useEffect, useState } from "react";

interface Props {
  searchedProduct: string
}

export default function SearchPageClient({searchedProduct}: Props) {
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    const searchFunction = async() => {
      setProducts(await searchProducts(searchedProduct));
    }

    searchFunction();
  }, [searchedProduct])

  console.log(products);
  
  return (
    <div>
      
    </div>
  )
}
