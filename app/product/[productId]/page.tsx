import ProductPageClient from "@/app/components/product/product-client";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type PostPageProps = {
  params: Promise<{ productId: string }>;
};

export default async function ProductPage({ params }: PostPageProps) {
  const { productId } = await params;
  const product = decodeURIComponent(productId);
  const session = await getSession();

  if (!session) redirect("/sign-in");

  return (
    <div>
      <ProductPageClient productId={product}/>
    </div>
  );
}
