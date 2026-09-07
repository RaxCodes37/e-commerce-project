import React from 'react'
import CartPageClient from '../components/cart/cart-client';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Cart() {
  const session = await getSession();

  if(!session) redirect("/sign-in");

  const userId = session.user.id;

  return (
    <CartPageClient userId={userId}/>
  )
}
