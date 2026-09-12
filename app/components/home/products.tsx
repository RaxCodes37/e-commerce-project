"use client";

import { Product } from "@/utils/interfaces";

interface Props {
  products: Product[];
  goProductPage: (productId: string) => void;
}

export default function Products({products, goProductPage}: Props) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10">
      {products.map((product) => (
        <div key={product.productId} className="border w-65 sm:w-auto mt-4 cursor-pointer duration-400" id="product" onClick={() => goProductPage(product.productId)}>
          {
            //Product images will go here
          }

          <div className="text-left mt-1">
            <h3 className="text-xl font-bold">{product.productName} - ${product.productPrice}</h3>
            <p className="mt-1 text-[#9b9a9a]">{product.productDesc.slice(0, 60)}<span className="text-[#000000]">...</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}
