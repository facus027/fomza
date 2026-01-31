

import { Header } from "./shared/components/Header";
import Hero from "./shared/components/Hero";
import Mision from "./shared/components/Mision";
import Nuestro from "./shared/components/Nuestro";
import Profesionales from "./shared/components/Profesionales";
import Quienes from "./shared/components/Quienes";
import Turnos from "./shared/components/Turnos";


export default function App() {
 

  return (
    <>
      
      <Header/>

      <main className="overflow-x-hidden" id="inicio">
        
        <Hero/>

        <div>
          <Quienes/>
        </div>

        <div>
          <Mision/>
        </div>

       <section
  className="
    relative w-full min-h-[360px]
    md:min-h-[495px]
    bg-[url('/fondos/fondos-05.png')]
    bg-cover bg-center bg-no-repeat
  "
>
  <div className="absolute inset-0" />

  <div
    className="
      relative z-10 text-white text-center
      px-6 pt-24
      text-2xl
      md:text-4xl md:mx-44 md:pt-48 md:px-0
    "
  >
    <h1 className="font-bold">PROFESIONALES</h1>
    <p className="mt-2 w-full text-base md:text-4xl">
      Conozca a nuestros profesionales de la salud
    </p>
  </div>
</section>


        <div>
          <Profesionales/>
        </div>

        <div>
          <Nuestro/>
        </div>

        <section
          id="obras"
          className="
            relative
            min-h-[60vh]
            bg-[url('/fondos/fondos-07.png')]
            bg-cover
            bg-center
            bg-no-repeat
            md:h-screen
            w-screen
            bg-crema md:mt-28 mt-10
          "
        />

        <div>
          <Turnos/>
        </div>  

       <div className="bg-crema py-10 px-6 md:py-16 md:px-0">
  <div className="mx-auto flex w-full flex-col gap-8 md:flex-row md:w-10/12 md:gap-0">
    {/* MAPA */}
    <div className="mx-auto w-full overflow-hidden rounded-2xl shadow-lg md:w-3/5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3349.889152007245!2d-68.8407348!3d-32.9010989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09149c3a5c51%3A0xbb89a6a73842b69f!2sSan%20Juan%20227%2C%20M5500%20Capital%2C%20Mendoza!5e0!3m2!1ses-419!2sar"
        className="h-[320px] w-full border-0 md:h-[650px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        title="Ubicación Fundación Oncológica Mendoza"
      />
    </div>

    {/* INFO */}
    <div className="flex w-full flex-col justify-center gap-4 text-base text-violet_darck md:ml-auto md:w-1/3 md:gap-5 md:text-3xl">
      <div>
        <h4 className="font-bold">Ubicación:</h4>
        <p>San Juan 227 – Ciudad – Mendoza</p>
      </div>

      <div>
        <h4 className="font-bold">Email:</h4>
        <a
          href="mailto:secretaria@fomza.org.ar"
          className="break-words underline underline-offset-4 hover:text-violet_light"
        >
          secretaria@fomza.org.ar
        </a>
      </div>

      <div>
        <h4 className="font-bold">Horarios de atención:</h4>
        <p>Lunes a Viernes de 8:30 a 16:30 h.</p>
      </div>

      <div>
        <h4 className="font-bold">Instagram:</h4>
        <a
          href="https://www.instagram.com/fundaciononcologicamdza"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-violet_light"
        >
          @fundaciononcologicamdza
        </a>
      </div>
    </div>
  </div>
</div>

{/* LOGO FINAL */}
<div className="bg-violet_light">
  <img
    className="mx-auto h-20 w-auto py-6 md:h-36 md:py-8"
    src="/fondos/fondos-08.png"
    alt="logo_fom"
  />
</div>


      </main>

      
    </>
  );
}
