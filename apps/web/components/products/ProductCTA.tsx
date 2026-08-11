export default function ProductCTA({
website
}:{
website?:string
}){


return (

<section>

{
website && (

<a
href={website}
target="_blank"
rel="noopener noreferrer"
>

Open Project Website

</a>

)

}

</section>

)

}
