export default function ProductTechnology({
items
}:{
items:string[]
}){


return (

<section>

<h2>
Technology
</h2>


<ul>

{
items.map((item)=>(
<li key={item}>
{item}
</li>
))
}

</ul>


</section>

)

}
