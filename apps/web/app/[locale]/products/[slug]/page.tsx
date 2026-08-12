import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/founder/InnerPages";
import { products, type Locale } from "@/content/founder-site";

export function generateStaticParams(){
  return products.flatMap((p)=>[{locale:"fa",slug:p.slug},{locale:"en",slug:p.slug}]);
}

export default async function Page({params}:{params:Promise<{locale:string;slug:string}>}) {
  const {locale:raw,slug}=await params;
  const locale:Locale=raw==="en"?"en":"fa";
  if(!products.some((p)=>p.slug===slug)) notFound();
  return <ProductPageView locale={locale} slug={slug}/>;
}