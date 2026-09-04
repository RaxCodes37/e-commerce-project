import React from 'react'
import SearchForm from './search-form';
import Products from './products';

export default function HomePageClient() {
  return (
    <div className="flex flex-col items-center">
      <SearchForm/>

      <Products/>
    </div>
  )
}
