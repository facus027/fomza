import { useEffect, useState } from "react";

export default function Head() {

  function useIsScrolled(threshold = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);
    onScroll(); // estado inicial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isScrolled;
}

const isScrolled = useIsScrolled(10);

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
    <div className="w-full bg-violet_light py-1 md:py-5  mx-auto">
  <div
    className="
      mx-auto flex flex-col items-center gap-2 px-4 
      md:flex md:flex-row md:justify-around md:items-center md:gap-0 md:px-0
    "
  >
    <div 
     onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
    className="flex cursor-pointer">
      <img
        className="h-16 w-auto md:h-24"
        src="/fondos/fondos-08.png"
        alt="logo_fom"
      />
    </div>

    <div className={["text-white flex flex-col gap-2 md:gap-1 w-full md:w-auto ",
     // Mobile: ocultar cuando hay scroll
          isScrolled ? "md:opacity-100 opacity-0 -translate-y-3 pointer-events-none h-0 overflow-hidden" : "opacity-100 translate-y-0",
          // Desktop: siempre visible
          "md:opacity-100 md:translate-y-0 md:pointer-events-auto md:h-auto md:overflow-visible",
        ].join(" ")}>
      <div
        className="
          flex flex-col items-center text-center gap-2 pb-3
          border-b-2 border-white
          md:flex-row md:text-left md:items-end md:gap-5 md:pb-0
        "
      >
        <h3 className="font-gotham font-bold uppercase text-lg tracking-wide md:text-3xl">
          TURNOS WHATSAPP
        </h3>
        <p className="font-gotham font-light text-sm tracking-wide md:text-lg md:mt-2">
          (Lunes a Viernes de 9:00 hs. a 16:00 hs.)
        </p>
      </div>

      <div
        className="
          flex flex-col items-center gap-3 text-center
          md:flex-row md:text-left md:items-center md:gap-0.5
        "
      >
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-0.5">
          <h3 className="font-gotham font-semibold text-lg italic md:text-2xl">
            Consultorios:
          </h3>

          <div>
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

        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-0.5">
          <h3 className="font-gotham font-semibold text-lg italic md:text-xl">
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
    </div>
  </div>
</div>
  )
}
