

export default function Mision() {
  return (

    <>
      <section 
      id="mision"
      className="w-full bg-violet_light text-white">
  <div
    className="
      mx-auto flex w-full flex-col gap-8 px-6 py-20
      md:w-9/12 md:py-32 md:gap-10
    "
  >
    <div>
      <h3 className="text-center text-2xl font-bold md:text-4xl">
        MISIÓN Y VISIÓN
      </h3>
    </div>

    <div className="flex flex-col gap-8 md:gap-7">
      {/* MISIÓN */}
      <div
        className="
          flex flex-col items-center gap-4 text-center
          md:flex-row md:justify-center md:items-center md:text-left
        "
      >
        <img
          className="h-28 w-auto rounded-sm md:h-44 md:border-r-4"
          src="/fondos/fondos-03.png"
          alt="icon_mision"
        />

        <h3 className="w-full text-base md:ml-5 md:w-3/4 md:text-xl md:text-justify">
          Nuestra misión es ser una entidad constituida en Mendoza de referencia
          en el área de la oncología clínica.
        </h3>
      </div>

      {/* VISIÓN */}
      <div
        className="
          flex flex-col items-center gap-4 text-center
          md:flex-row md:justify-center md:items-center md:text-left
        "
      >
        <img
          className="h-28 w-auto rounded-sm md:h-44 md:border-r-4"
          src="/fondos/fondos-04.png"
          alt="icon_vision"
        />

        <h3 className="w-full text-base md:ml-5 md:w-3/4 md:text-xl md:text-justify">
          Nuestra visión es brindar un servicio con los estándares de calidad que
          la oncología y su avance necesitan, actualizando permanentemente el
          conocimiento de nuestros médicos, mejorando nuestros procesos de
          trabajo, participando junto al ámbito público de la mejor atención de
          nuestros pacientes y familias.
        </h3>
      </div>
    </div>
  </div>
</section>

    </>

  )
}
