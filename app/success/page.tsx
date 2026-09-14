import { stripe } from "@/lib/stripe";
import BackHomeBtn from "../components/back-home-btn";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>;
}) {
  const { session_id } = await searchParams;
  const session = await stripe.checkout.sessions.retrieve(session_id);

  return (
    <div className="flex justify-center">
      <div id="message" className="text-center mt-2">
        <h1 className="text-2xl font-bold">Purchase completed!</h1>
        <BackHomeBtn/>
      </div>
    </div>
  );
}
