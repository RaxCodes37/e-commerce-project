import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import SearchPageClient from "../components/search/search-page";

type SearchedForumsParams = {
  searchParams: Promise<{ q?: string }>;
};

export default async function ListSearchedForums({ 
  searchParams,
}: SearchedForumsParams) {
  const { q } = await searchParams;
  const product = q ?? "";
  const session = await getSession();

  if(!session) redirect("/sign-up")

  return (
    <SearchPageClient searchedProduct={product}/>
  )
}
