"use client";

import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface Props {
  searchProduct: string;
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
  goSearch: () => void
}

export default function SearchForm({searchProduct, setSearchProduct, goSearch}: Props) {

  return (
    <form className="flex mt-3 gap-2" onSubmit={goSearch}>
      <input
        type="text"
        className="border-2 border-[#ddd] rounded-md p-1"
        placeholder="Search"
        value={searchProduct}
        onChange={(e) => {
          setSearchProduct(e.target.value);
        }}
      />

      <button className="border-2 border-[#ddd] bg-[#e7e7e7] duration-400 hover:bg-white rounded-md px-2">
        <FaMagnifyingGlass></FaMagnifyingGlass>
      </button>
    </form>
  );
}
