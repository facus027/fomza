

export default function Profesionales() {
  return (

    <>
<section
  id="profesionales"
  className="
    relative
    min-h-[60vh]
    bg-[url('/fondos/fondos-06.png')]
    bg-cover
    bg-center
    bg-no-repeat
  "
>
  {/* Overlay */}
  <div className="absolute inset-0" />

  {/* Contenido */}
  <div className="relative z-10 mx-auto max-w-full md:w-10/12 pt-16 px-6 text-white justify-items-center md:pt-36 md:px-0">
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 md:gap-5">
      {/* CARD */}

       <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10">
          <h4 className="font-semibold text-lg md:text-3xl">Director Médico</h4>
          <p className="text-base xl:text-xl font-gotham font-semilight">
            • Dr. Emiliano Zani
          </p>
        </div>
      </div>

      <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10 font-gotham">
          <h4 className="font-semibold text-lg md:text-3xl"> Médicos Oncólogos</h4>
          <p className="text-base xl:text-xl font-gotham font-semilight">
            • Avendaño, María Cecilia <br className="lg:hidden block"/>• Díaz Cardillo, Eliana <br className=""/>
            • Zani, Emiliano <br className="lg:hidden block"/>• Rodríguez Zanini,Hernán
          </p>
        </div>
      </div>

      <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10 font-gotham">
          <h4 className="font-semibold text-lg md:text-3xl">
           Médico Residente (Oncología)
          </h4>
          <p className="text-base xl:text-2xl font-gotham font-semilight">• Cuadrado, Jonathan Luis Luján</p>
        </div>
      </div>

      <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10 font-gotham">
          <h4 className="font-semibold text-lg md:text-3xl">
            Hospital de día / Centro de mezcla
          </h4>
          <p className="text-base xl:text-2xl font-gotham font-semilight">
           • Ábalos, Alejandro Eliseo <br className="lg:hidden block"/>• Listo, Luis <br className="lg:hidden block"/>(Enfermeros) <br />
           • Caif, Silvia Eugenia (Farmacéutica)
          </p>
        </div>
      </div>

      <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10 font-gotham">
          <h4 className="font-semibold text-lg md:text-3xl">
            Médico Cirujano (Tórax)
          </h4>
          <p className="text-base xl:text-2xl font-gotham font-semilight">• Abdala, Jorge</p>
        </div>
      </div>

      <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10 font-gotham">
          <h4 className="font-semibold text-lg md:text-3xl">Médicos Ginecólogos</h4>
          <p className="text-base xl:text-2xl font-gotham font-semilight">
            • Barroso, Rosana Natalia <br />
            • Gagliardi, Juan Manuel
          </p>
        </div>
      </div>

      <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10 font-gotham">
          <h4 className="font-semibold text-lg md:text-3xl italic">Médico Mastólogo</h4>
          <p className="text-base xl:text-2xl font-gotham font-semilight">• Zanfurjo, Alejandra</p>
        </div>
      </div>

      <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10 font-gotham">
          <h4 className="font-semibold text-lg md:text-3xl">
            Médicos Paliativistas
          </h4>
          <p className="text-base xl:text-2xl font-gotham font-semilight">
            • Aldunate, Daniela Betina <br className="lg:hidden block"/>• Pedrozo, Patricia <br />
            • Boris, Cecilia <br className="lg:hidden block"/>• Holgado, Marcela
          </p>
        </div>
      </div>

      <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10 font-gotham">
          <h4 className="font-semibold text-lg md:text-3xl">Médicos Urólogos</h4>
          <p className="text-base xl:text-2xl font-gotham font-semilight">
            • Guareschi, Jonathan Exequiel <br />
            • López Fontana
          </p>
        </div>
      </div>

      <div className="border-2 border-violet_darck px-5 py-5 w-full rounded-xl md:px-16 md:py-8">
        <div className="text-violet_darck ml-0 md:-ml-10 font-gotham">
          <h4 className="font-semibold text-xl md:text-4xl">Equipo de soporte</h4>
          <p className="text-base xl:text-2xl font-gotham font-semilight">
            • Leyton, María Paula (Nutricionista) <br />
            • Miqueo Kairuz, Agustín (Psicólogo)
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-crema w-full px-6 py-10 md:mx-auto md:py-20">
  {/* contenido */}
</section>

    </>

  )
}
