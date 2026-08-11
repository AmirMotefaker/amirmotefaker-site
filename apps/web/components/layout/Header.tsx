import Link from "next/link";

export default function Header(){

return (

<header className="border-b">

<nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between">

<Link href="/fa" className="font-bold text-2xl">
AmirMotefaker.ir
</Link>


<div className="flex gap-6">

<Link href="/fa/about">
درباره من
</Link>

<Link href="/fa/resume">
رزومه
</Link>

<Link href="/fa/products">
محصولات
</Link>

<Link href="/fa/contact">
تماس
</Link>

</div>

</nav>

</header>

)

}
