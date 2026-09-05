"use client"

import { useState } from 'react'
import SearchForm from './search-form';
import Products from './products';
import { searchProducts } from '@/utils/db-actions';
import { Product } from '@/utils/interfaces';
import { useRouter } from 'next/navigation';

export default function HomePageClient() {
  const router = useRouter()
  const [searchProduct, setSearchProduct] = useState<string>("");

  const goSearch = async() => {
    if(searchProduct.trim() === "") return;

    router.push(`/search?q=${encodeURIComponent(searchProduct)}`);
    setSearchProduct("");
  }

  return (
    <div className="flex flex-col items-center">
      <SearchForm searchProduct={searchProduct} setSearchProduct={setSearchProduct} goSearch={goSearch}/>

      <Products/>
    </div>
  )
}
