export default function ProductHero({
name,
description
}:{
name:string;
description:string;
}){


return (

<section>

<h1>
{name}
</h1>


<p>
{description}
</p>


</section>

)

}
