import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";


export default function Home(){

const products=[
"LinkResan",
"Farsio",
"Zobdino",
"FilmTrack",
"ShiftPay",
"PrimeSYS"
];


return (

<main>


<section className="min-h-screen flex items-center">

<Container>

<div className="grid md:grid-cols-2 gap-12">


<div>

<h1 className="text-6xl font-bold">
Amir Motefaker
</h1>


<h2 className="text-3xl mt-6">
AI Founder & Technology Builder
</h2>


<p className="mt-8 text-xl text-gray-600">
Building intelligent products,
AI platforms and digital ecosystems.
</p>


<div className="mt-10 flex gap-4">

<Button>
مشاهده محصولات
</Button>

<Button>
همکاری
</Button>

</div>

</div>



<GlassCard>

<h3 className="text-3xl font-bold">
AI Platform Vision
</h3>

<p className="mt-5">
Creating practical artificial intelligence solutions.
</p>

</GlassCard>


</div>

</Container>

</section>



<section>

<Container>

<h2 className="text-4xl font-bold mb-10">
Featured Products
</h2>


<div className="grid md:grid-cols-3 gap-6">


{products.map(product=>(

<GlassCard key={product}>

<h3 className="text-xl font-bold">
{product}
</h3>

<p className="mt-4">
AI Powered Product
</p>

</GlassCard>

))}


</div>

</Container>


</section>


</main>

)

}
