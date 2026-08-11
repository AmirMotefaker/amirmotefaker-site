import HeroVisual from "@/components/home/HeroVisual";
import FounderProfile from "@/components/home/FounderProfile";
import StatsSection from "@/components/home/StatsSection";
import PremiumProductCards from "@/components/home/PremiumProductCards";
import VisionSection from "@/components/home/VisionSection";
import PremiumCTA from "@/components/home/PremiumCTA";
import PremiumNavbar from "@/components/layout/PremiumNavbar";
import PremiumFooter from "@/components/layout/PremiumFooter";


export default function Home(){

return(
<div>

<PremiumNavbar />

<main className="mx-auto max-w-7xl px-8">

<section className="grid min-h-screen items-center gap-12 md:grid-cols-2">

<HeroVisual />

<div>

<h1 className="text-6xl font-black leading-tight">
Building the Future with
<span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
Artificial Intelligence
</span>
</h1>

<p className="mt-8 text-xl text-gray-600">
Amir Motefaker is an AI founder building intelligent products,
platforms and digital ecosystems.
</p>

</div>

</section>


<FounderProfile />

<StatsSection />

<PremiumProductCards />

<VisionSection />

<PremiumCTA />

</main>


<PremiumFooter />

</div>
)

}
