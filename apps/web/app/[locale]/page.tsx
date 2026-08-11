import HeroSection from "@/components/home/HeroSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import TechnologySection from "@/components/home/TechnologySection";
import BlogPreview from "@/components/home/BlogPreview";


export const metadata = {
title:
"Amir Motefaker | Technology Enthusiast",

description:
"Technology enthusiast passionate about AI, software development and digital products."
};


export default function Page(){

return (

<main>

<HeroSection />

<ProductShowcase />

<TechnologySection />

<BlogPreview />

</main>

);

}
