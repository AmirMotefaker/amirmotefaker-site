export default function Section({
children,
title
}:{
children:React.ReactNode
title?:string
}){

return (

<section className="py-24">

<div className="mx-auto max-w-7xl px-6">

{title && (

<h2 className="text-4xl font-bold mb-12">
{title}
</h2>

)}

{children}

</div>

</section>

)

}
