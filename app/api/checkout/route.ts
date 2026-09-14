import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { stripe } from '@/lib/stripe';
import { db } from '@/app';
import { productsTable } from '@/schema';

export async function POST(request: Request) {
  const { productId, quantity = 1 } = await request.json();

  const [product] = await db
	  .select()
	  .from(productsTable)
	  .where(eq(productsTable.productId, productId));
	  
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: product.stripePriceId, quantity }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/home`,
    metadata: { productId: product.productId }
  });

  return NextResponse.json({ url: session.url });
}
