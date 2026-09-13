import { stripe } from '@/lib/stripe';

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>;
}) {
  const { session_id } = await searchParams;
  const session = await stripe.checkout.sessions.retrieve(session_id);
}