export default function GradientText({
children
}:{
children:React.ReactNode
}){

return (

<span className="
bg-gradient-to-r
from-purple-600
via-blue-600
to-cyan-500
bg-clip-text
text-transparent
">

{children}

</span>

)

}
