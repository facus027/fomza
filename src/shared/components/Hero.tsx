

export default function Hero() {
  return (
    <>
<section
  className="
    relative w-full min-h-[520px]
    md:min-h-[650px]
    bg-[url('/fondos/fondos-01.png')]
    bg-cover bg-center bg-no-repeat mt-52 md:mt-48 
  "
>
  <div className="absolute inset-0" />

  <div
    className="
      relative z-10 px-6 py-12 text-white
      flex flex-col gap-6 justify-center items-center text-center
      md:px-6 md:py-20 md:gap-16 md:items-start md:text-left  md:ml-44 md:pt-48 
      
    "
  >
   <div className="mt-32 md:mt-0 space-y-10">
     <h1 className="text-2xl font-medium md:text-4xl font-gotham italic">
      Atención oncológica de precisión
    </h1>

    <p className="mt-2 text-3xl font-bold font-gotham w-full md:text-7xl md:w-8/12 italic">
      Más de 15 años acompañando a los mendocinos.
    </p>
   </div>
  </div>
</section>

    </>
  )
}
