"use client";

import { ProductOnCart } from "@/utils/interfaces";
import React from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

interface Props {
  products: ProductOnCart[];
}

export default function CartProductsDisplay({ products }: Props) {
  return (
    <div className="m-auto w-[55%] border h-screen overflow-y-auto" id="cart-container">
      {products.map((product) => (
        <div key={product.cartId}>
          {
            //Product images will go here
          }

          <div className="px-2.5 pt-2">
            <div className="text-left">
              <h3 className="text-xl font-bold">
                {product.productName} - ${product.productPrice}
              </h3>
              <p className="mt-1 text-[#9b9a9a]">{product.productDesc}</p>
            </div>

            <div className="mt-3">
              <button className="flex items-center gap-2 text-white bg-[#336699] border border-[#4b7fb4] duration-400 hover:bg-[#2b5177] rounded-md p-2 font-semibold">
                Buy Now
                <span className="text-xl">
                  <MdOutlineShoppingCartCheckout />
                </span>
              </button>
            </div>
          </div>
          <hr className="mt-4" />
        </div>
      ))}
    </div>
  );
}
