import {founderFa} from "@/content/founder/fa";

export default function AboutPage(){

return (

<section>

<h1>{founderFa.name}</h1>

<p>
{founderFa.role}
</p>

<p>
{founderFa.description}
</p>

</section>

);

}
