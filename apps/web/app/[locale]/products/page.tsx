import {products} from "@/content/products";

export default function ProductsPage(){

return (

<section>

<h1>Products</h1>

{products.map((product)=>(

<div key={product.slug}>

<h2>
{product.title}
</h2>

<p>
{product.description}
</p>

</div>

))}

</section>

);

}
