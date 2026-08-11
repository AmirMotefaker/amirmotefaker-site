export default function GlassPanel({
 children
}:{
 children:React.ReactNode
}) {
 return (
  <div className="rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur">
    {children}
  </div>
 )
}
