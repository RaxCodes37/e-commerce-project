import Image from "next/image";

export default function Products() {
  const products = [
    {
      productId: "1",
      productName: "Product1",
      ProductDesc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
    {
      productId: "2",
      productName: "Product2",
      ProductDesc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
    {
      productId: "3",
      productName: "Product3",
      ProductDesc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
    {
      productId: "4",
      productName: "Product4",
      ProductDesc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10">
      {products.map((product) => (
        <div key={product.productId} className="border mt-4 cursor-pointer duration-400" id="product">
          <Image
            src="https://schylling.com/wp-content/uploads/2024/08/DRDND_Image1.jpg"
            height={300}
            width={300}
            alt="Image"
            className="rounded-md"
          />

          <div className="text-left mt-1">
            <h3 className="text-xl font-bold">{product.productName}</h3>
            <p className="mt-1 text-[#9b9a9a]">{product.ProductDesc.slice(0, 60)}<span className="text-[#000000]">...</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}
