import { products } from "@/content/products";
import ProductPageLayout from "@/components/products/ProductPageLayout";


export default function ProductsPage(){

return (

<main>

<section>

<h1>
Products
</h1>


{
products.map((product)=>(
<ProductPageLayout
key={product.slug}
product={product}
/>
))
}


</section>


</main>

)

}
