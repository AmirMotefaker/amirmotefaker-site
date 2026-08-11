import { products } from "../../data/products";

export default function ProductShowcase(){

return (

<section>

<h2>
Products
</h2>

<div>

{
products.map((product)=>(
<div key={product.slug}>

<h3>
{product.name}
</h3>

<p>
{product.category}
</p>

</div>
))

}

</div>

</section>

);

}