import GradientText from "@/components/ui/GradientText";

export default function PremiumHero(){

return (

<section className="
min-h-[90vh]
flex
items-center
">

<div className="
mx-auto
max-w-7xl
px-6
grid
md:grid-cols-2
gap-16
items-center
">


<div>


<h1 className="
text-6xl
font-black
leading-tight
">

Building the future with

<br/>

<GradientText>
Artificial Intelligence
</GradientText>

</h1>


<p className="
mt-8
text-xl
text-neutral-600
">

Amir Motefaker is an AI founder building intelligent products,
platforms and digital ecosystems.

</p>


<div className="mt-10 flex gap-5">

<a className="
rounded-full
bg-black
text-white
px-8
py-4
">

Explore Products

</a>


<a className="
rounded-full
border
px-8
py-4
">

Contact

</a>


</div>


</div>



<div className="
rounded-[40px]
bg-gradient-to-br
from-neutral-900
to-neutral-700
h-[500px]
flex
items-center
justify-center
text-white
">


AI Vision


</div>



</div>

</section>

)

}
