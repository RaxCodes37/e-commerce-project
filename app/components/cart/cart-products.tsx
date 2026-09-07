"use client";

import { ProductOnCart } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash, FaX } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

interface Props {
  products: ProductOnCart[];
  removeFromCartFunction: (cartId: string) => void;
}

export default function CartProductsDisplay({
  products,
  removeFromCartFunction,
}: Props) {
  const router = useRouter()

  return (
    <div>
      {products.length === 0 ? (
        <div className="flex justify-center mt-4">
          <p id="message" className="flex flex-col items-center">
            <span>No Items Added To Cart</span>
            <button className="hover:underline cursor-pointer" onClick={() => router.push("/home")}>Go Back Home</button>
          </p>
        </div>
      ) : (
        <div
          className="m-auto w-[55%] border h-screen overflow-y-auto"
          id="cart-container"
        >
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

                <div className="mt-3 flex gap-2">
                  <button className="flex items-center gap-2 text-white bg-[#336699] border border-[#4b7fb4] duration-400 hover:bg-[#2b5177] rounded-md p-2 font-semibold">
                    Buy Now
                    <span className="text-xl">
                      <MdOutlineShoppingCartCheckout />
                    </span>
                  </button>

                  <button
                    className="flex items-center gap-2 text-white bg-[#d06161] border border-[#b44b4b] duration-400 hover:bg-[#a84f4f] rounded-md p-2 font-semibold"
                    onClick={() => removeFromCartFunction(product.cartId)}
                  >
                    Remove Item
                    <span>
                      <FaTrash></FaTrash>
                    </span>
                  </button>
                </div>
              </div>
              <hr className="mt-4" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
