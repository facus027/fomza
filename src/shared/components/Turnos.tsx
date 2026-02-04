

export default function Turnos() {

      // Formateo simple, si ya lo formateás en otro lado, borrá esto.
function formatPhone(phone: string) {
  // Mantenerlo simple: 261 720 6340 si viene así o lo podés mejorar luego
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  return phone;
}

function toWhatsAppLink(phone: string, text?: string) {
  const normalized = phone.replace(/\D/g, "");
  const msg = text ? `?text=${encodeURIComponent(text)}` : "";
  // AR: +54. Si tus números ya incluyen código, dejalo como viene.
  // Usamos wa.me con el número sin símbolos.
  return `https://wa.me/${normalized}${msg}`;
}

  return (
    <>
     <section 
     id="contacto"
     className="w-full bg-crema text-white pt-5 md:pt-20">
  <div
    className="
      mx-auto w-11/12 rounded-2xl bg-violet_darck
      py-12 px-6 text-center text-white shadow-lg
      md:w-10/12 md:py-20 md:px- font-gotham
    "
  >
    {/* Título */}
    <h2 className="text-2xl font-bold font-gotham italic uppercase tracking-widest md:text-4xl">
      Turnos WhatsApp
    </h2>

    {/* Separador */}
    <div className="mx-auto my-7 h-px w-4/5 bg-white/70 md:w-3/5" />

    {/* Horarios */}
    <p className="text-sm font-light md:text-3xl">
      Lunes a Viernes de 9:00 hs. a 16:00 hs.
    </p>

    {/* Teléfonos */}
    <div
      className="
        mt-6 flex flex-col items-center justify-center gap-5
        text-base md:mt-4 md:flex-row md:gap-2 md:text-3xl
      "
    >
      {/* Consultorios */}
      <div className="flex flex-col items-center gap-3 md:flex-row md:gap-2">
        <h3 className="font-gotham font-semibold text-lg italic md:text-3xl">
          Consultorios:
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href={toWhatsAppLink("2617206340", "Hola! Quiero solicitar un turno.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black/5 px-3 py-1 text-white hover:bg-black/10"
          >
            {formatPhone("2617206340")}
          </a>

          <span className="font-gotham font-semibold text-lg md:text-2xl">/</span>

          <a
            href={toWhatsAppLink("2615256038", "Hola! Quiero solicitar un turno.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black/5 px-3 py-1 text-white hover:bg-black/10"
          >
            {formatPhone("2615256038")}
          </a>
        </div>
      </div>

      {/* Quimioterapias */}
      <div className="flex flex-col items-center gap-3 md:flex-row md:gap-2">
        <h3 className="font-gotham font-semibold text-lg italic md:text-3xl">
          Quimioterapias:
        </h3>

        <a
          href={toWhatsAppLink("2616857385", "Hola! Quiero solicitar un turno.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-black/5 px-3 py-1 text-white hover:bg-black/10"
        >
          {formatPhone("2616857385")}
        </a>
      </div>
    </div>

    {/* Botón */}
    <div className="mt-8 md:mt-8">
      <a
        href={toWhatsAppLink("2615256038", "Hola! Quiero solicitar un turno.")}
        className="
          inline-block rounded-full bg-violet_light
          mt-6 px-6 py-3 text-lg font-semibold uppercase tracking-wide text-white
          transition hover:bg-[#c79ae3]
          md:mt-10 md:px-8 md:py-6 md:text-2xl
        "
      >
        Solicitar turno
      </a>
    </div>
  </div>
</section>

    </>
  )
}
