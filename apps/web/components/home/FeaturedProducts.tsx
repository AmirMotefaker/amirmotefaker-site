import { products } from "@/content/products";

export default function FeaturedProducts() {

return (

<section>

<h2>
Featured Products
</h2>

<div>

{
products.slice(0,4).map((product)=>(
<div key={product.slug}>

<h3>
{product.name}
</h3>

<p>
{product.description}
</p>

</div>
))
}

</div>

</section>

)

}
