type Product = {
    name:string;
    category:string;
    description:string;
    vision:string;
    technologies:string[];
    status:string;
    website?:string;
};


export default function ProductPageLayout({
    product
}:{
    product:Product
}){


return (

<div>

<section>

<h1>
{product.name}
</h1>


<p>
{product.description}
</p>


</section>


<section>

<h2>
Vision
</h2>

<p>
{product.vision}
</p>

</section>


<section>

<h2>
Technology Stack
</h2>


<ul>

{
product.technologies.map((item)=>(
<li key={item}>
{item}
</li>
))
}

</ul>


</section>


<section>

<h2>
Status
</h2>

<p>
{product.status}
</p>


</section>


{
product.website && (

<a
href={product.website}
target="_blank"
rel="noopener noreferrer"
>

Visit Website

</a>

)

}


</div>

)

}
