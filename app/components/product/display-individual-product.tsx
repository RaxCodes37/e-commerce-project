"use client";

import { Product } from "@/utils/interfaces";
import { IoCart } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

interface Props {
  product: Product[];
}

export default function IndividualProduct({ product }: Props) {
  return (
    <div className="m-auto w-[55%]">
      {product.map((product) => (
        <div
          key={product.productId}
          className="border mt-4"
          id="individual-product"
        >
          {
            //Product images will go here
          }

          <div className="text-left mt-1">
            <h3 className="text-xl font-bold">{product.productName}</h3>
            <p className="mt-1 text-[#9b9a9a]">{product.productDesc}</p>
          </div>

          <div className="mt-3 flex gap-4">
            <button className="flex items-center gap-2 text-white bg-[#336699] border border-[#4b7fb4] duration-400 hover:bg-[#2b5177] rounded-md p-2 font-semibold">
              Add To Cart{" "}
              <span className="text-xl">
                <IoCart></IoCart>
              </span>
            </button>

            <button className="flex items-center gap-2 text-white bg-[#336699] border border-[#4b7fb4] duration-400 hover:bg-[#2b5177] rounded-md p-2 font-semibold">
              Buy Now
              <span className="text-xl">
                <MdOutlineShoppingCartCheckout />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
