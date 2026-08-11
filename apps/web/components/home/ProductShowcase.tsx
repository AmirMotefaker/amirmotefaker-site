import Section from "@/components/ui/Section";

export default function ProductShowcase(){

const products=[
"LinkResan",
"Farsio",
"Zobdino",
"FilmTrack",
"ShiftPay",
"PrimeSYS"
];


return (

<Section title="Featured Products">


<div className="
grid
md:grid-cols-3
gap-8
">

{
products.map(product=>(

<div
key={product}
className="
rounded-3xl
border
p-8
hover:-translate-y-2
transition
">

<h3 className="text-2xl font-bold">

{product}

</h3>


<p className="mt-4 text-neutral-600">

AI powered digital platform

</p>


</div>

))
}

</div>


</Section>

)

}
