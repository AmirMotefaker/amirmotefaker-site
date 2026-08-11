export default function StatsSection() {

 const stats = [
  ["Products","8+"],
  ["Years Experience","15+"],
  ["AI Platforms","5+"]
 ];

 return (
  <section className="grid gap-6 md:grid-cols-3 py-16">
   {stats.map(([title,value])=>(
    <div
     key={title}
     className="rounded-3xl border bg-white p-8 text-center shadow-lg"
    >
      <div className="text-4xl font-bold">
       {value}
      </div>
      <div className="mt-2 text-gray-500">
       {title}
      </div>
    </div>
   ))}
  </section>
 );
}
