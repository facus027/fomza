

export default function Nuestro() {
  return (
    <>
     <section 
     id="nuestro"
     className="w-full bg-violet_light text-white">
  <div className="mx-auto w-full px-6 py-14 flex flex-col gap-8 md:w-10/12 md:py-20 md:gap-10">
    <div className="text-left md:text-justify">
      <h3 className="text-2xl font-bold tracking-wide md:text-3xl">
        NUESTRO CENTRO
      </h3>
    </div>

    <div>
      <div className="flex flex-col gap-5 text-left text-base leading-relaxed md:gap-8 md:text-xl md:text-justify md:leading-normal">
        <p>
          <span className="font-bold">Fundación Oncológica Mendoza </span>
          cuenta con un sector exclusivo e independiente, de aproximadamente 150 m²,
          especialmente diseñado para la realización de tratamientos oncológicos endovenosos
          (quimioterapia) que pueden llevarse a cabo de manera ambulatoria.
        </p>

        <p>
          Este espacio, conocido como <span className="font-bold">Hospital de Día, funciona de lunes a viernes de 8:30 a 16:00 hs</span>{" "}
          y está pensado para brindar comodidad, seguridad y contención durante cada tratamiento.
        </p>

        <p>
          Dispone de 10 boxes individuales, equipados con sillones confortables para la administración
          de medicación oncológica en sus distintas modalidades: endovenosa, intramuscular o subcutánea,
          adaptándose a los diferentes tiempos de infusión que cada tratamiento requiere.
        </p>

        <p>
          Además, el área cuenta con una habitación individual destinada a la internación transitoria de
          pacientes que presenten complicaciones asociadas a los tratamientos, garantizando una atención
          oportuna y especializada.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
