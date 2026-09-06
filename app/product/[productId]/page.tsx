type PostPageProps = {
  params: Promise<{ productId: string }>;
};

export default async function ProductPage({ params }: PostPageProps) {
  const { productId } = await params;
  const product = decodeURIComponent(productId);

  return <div>{product}</div>;
}
