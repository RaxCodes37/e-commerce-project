"use client";

import { Product } from "@/utils/interfaces";

interface Props {
  products: Product[];
  goProductPage: (productId: string) => void;
}

export default function SearchedProduct({products, goProductPage}: Props) {
  return (
    <div className="m-auto w-[55%]">
      {products.map((product) => (
        <div key={product.productId} className="border mt-4 cursor-pointer duration-400" id="searched-product" onClick={() => goProductPage(product.productId)}>
          {
            //Product images will go here
          }

          <div className="text-left mt-1">
            <h3 className="text-xl font-bold">{product.productName}</h3>
            <p className="mt-1 text-[#9b9a9a]">{product.productDesc.slice(0, 60)}<span className="text-[#000000]">...</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}