"use client";

import { decreaseProductCart, increaseProductCart } from "@/utils/db-actions";
import { ProductOnCart } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

interface Props {
  products: ProductOnCart[];
  removeFromCartFunction: (cartId: string) => void;
}

export default function CartProductsDisplay({
  products,
  removeFromCartFunction,
}: Props) {
  const router = useRouter();

  const increaseProductCount = async (productId: string) => {
    try {
      await increaseProductCart(productId);

      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const decreaseProductCount = async (cartId: string) => {
    try {
      await decreaseProductCart(cartId);

      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {products.length === 0 ? (
        <div className="flex justify-center mt-4">
          <p id="message" className="flex flex-col items-center">
            <span>No Items Added To Cart</span>
            <button
              className="hover:underline cursor-pointer"
              onClick={() => router.push("/home")}
            >
              Go Back Home
            </button>
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

                <div className="mt-3 flex gap-4">
                  <button className="flex items-center gap-2 text-white text-sm sm:text-lg bg-[#336699] border border-[#4b7fb4] duration-400 hover:bg-[#2b5177] rounded-md p-2 font-semibold">
                    Buy Now
                    <span className="text-xl">
                      <MdOutlineShoppingCartCheckout />
                    </span>
                  </button>

                  <div className="flex items-center gap-2 bg-[#c2c2c2dd] border border-[#aaaaaadd] py-1 px-3 rounded-md">
                    <p className="text-2xl">{product.productCount}</p>
                    <div className="flex flex-col gap-2">
                      <button
                        className="bg-[#ecececdd] p-1 rounded-md text-xl"
                        onClick={() => increaseProductCount(product.productId)}
                      >
                        <FaPlus></FaPlus>
                      </button>
                      <button
                        className="bg-[#ecececdd] p-1 rounded-md text-xl"
                        onClick={() => decreaseProductCount(product.cartId)}
                      >
                        {product.productCount === 1 ? (
                          <p className="text-[#d84747]">
                            <FaTrash />
                          </p>
                        ) : (
                          <FaMinus />
                        )}
                      </button>
                    </div>
                  </div>
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
