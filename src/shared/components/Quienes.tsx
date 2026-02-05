

export default function Quienes() {
  return (
    <>
    <section 
    id="quienes"
    className="bg-crema py-10 md:py-28 px-30">
        <div className="md:w-10/12 flex md:flex-row flex-col w-full justify-center items-center mx-auto gap-5">
            <div className="flex flex-col w-10/12 xl:w-3/5 lg:w-3/4 gap-10 text-justify">
                <h3 className="text-2xl xl:text-4xl text-violet_darck font-bold font-gotham">
                    ¿QUIENES SOMOS?
                </h3>
                <div className="flex flex-col lg:text-base text-sm xl:text-2xl gap-5 text-violet_darck font-gotham font-normal text-justify">
                    <p>
                    <span className="font-bold">Fundación Oncológica Mendoza </span>
                    nace a partir de una profunda
                    inquietud compartida por familias que atravesaron la pérdida de
                    seres queridos a causa del cáncer. De esas experiencias, y del
                    deseo de transformar el dolor en acompañamiento y cuidado,
                    surge este proyecto.
                </p>
                <p>
                    <span className="font-bold italic">Contamos con un equipo interdisciplinario de profesionales,</span><br />
                    médicos oncólogos, paliativistas, cirujanos, psicólogos, nutricionistas
                    y otros especialistas- decidió dar forma a un centro médico pensado 
                    exclusivamente para el paciente oncológico y su familia.
                </p>
                <div><p>Los objetivos definidos por nuestra institución abarcan:</p>
                    <ul className="list-disc list-inside">
                        <li>Desarrollo de distintas áreas dentro de la oncología clínica</li>
                        <li>Difusión de los Avances en oncología</li>
                        <li>Espacios de Servicios para el Paciente y su Familia.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="flex-1">
                <img 
                    className="h-full md:w-auto w-11/12 p-2 mx-auto"
                    src="/fondos/fondos-02.png" 
                    alt="quienes_somos" 
                />
            </div>
        </div>
    </section>
    </>
  )
}
