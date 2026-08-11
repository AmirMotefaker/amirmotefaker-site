export default function PremiumProductCards(){

 const products=[
  "LinkResan",
  "Farsi Smart Assistant",
  "FilmTrack",
  "Football Fan App",
  "ShiftPay",
  "PrimeSYS"
 ];

 return(
  <section className="py-20">
   <h2 className="mb-10 text-center text-4xl font-bold">
    Featured Products
   </h2>

   <div className="grid gap-6 md:grid-cols-3">
    {
     products.map(product=>(
      <div
       key={product}
       className="rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-2"
      >
       <h3 className="text-2xl font-bold">
        {product}
       </h3>

       <p className="mt-4 text-gray-500">
        AI powered digital platform and technology solution.
       </p>
      </div>
     ))
    }
   </div>
  </section>
 )
}
