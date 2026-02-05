

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

<div className="bg-crema fonts-gotham">
        <video
  className="w-9/12 rounded-xl shadow-lg pt-5 mx-auto md:pt-16"
  controls
  preload="metadata"
  playsInline
>
  <source
    src="https://res.cloudinary.com/dwxwejuvu/video/upload/f_auto,q_auto,w_1280/video/video_web_quienes_somos_abajo_de_quienes_somos_arriba_de_misi%C3%B3n_jhpdlx.mp4"
    type="video/mp4"
    />
</video>
    </div>


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
    <h1 className="font-bold italic font-gotham">PROFESIONALES</h1>
    <p className="mt-2 w-full text-sm lg:text-2xl font-gotham xl:text-4xl">
      Conozca a nuestros profesionales de la salud
    </p>
  </div>
</section>


        <div>
          <Profesionales/>
        </div>

<div className="bg-crema">
        <video
  className="w-9/12 rounded-xl shadow-lg pb-8 mx-auto"
  controls
  preload="metadata"
  playsInline
>
  <source
    src="https://res.cloudinary.com/dwxwejuvu/video/upload/f_auto,q_auto,w_1280/video/reels_fom_web_arriba_de_nuestro_centro_thzynn.mp4"
    type="video/mp4"
    />
</video>
    </div>


        <div>
          <Nuestro/>
        </div>

        <section
  id="obras"
  className="
    relative
    w-full
    min-h-[70vh]
    bg-crema
    pt-10
    overflow-hidden

    md:min-h-0
    md:h-screen
  "
>
  {/* MOBILE: loop horizontal */}
  <div className="absolute inset-0 md:hidden -mx-16">
    <div className="flex h-full w-full animate-obras-loop">
      <img
        src="/fondos/fondos-07.png"
        alt="Obras sociales"
        className="bg-cover w-full  shrink-0"
      />
     
    </div>
  </div>

  {/* DESKTOP: estático como antes */}
  <div
    className="
      hidden md:block
      absolute inset-0
      bg-[url('/fondos/fondos-07.png')]
      bg-cover
      bg-center
      bg-no-repeat
    "
  />
</section>


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
    <div className="flex w-full flex-col justify-center gap-4 text-base font-gotham text-violet_darck md:ml-auto md:w-1/3 md:gap-5  xl:text-2xl">
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
<div className="relative bg-violet_light pb-12">
  {/* Logo principal */}
  <img
    className="mx-auto h-20 w-auto py-3 md:h-20 md:py-1"
    src="/fondos/fondos-08.png"
    alt="logo_fom"
  />

  {/* Logo creador */}

   <a href="https://linktr.ee/viralmk?fbclid=PAZXh0bgNhZW0CMTEAAaaDt0GRMewRaznFlWYwXoXmAf8DphiWiZ3Cdi0Kn-YCgwNpNZ7Lz0743UM_aem_Vzxh6uCC7RpCbm0sA08zgA"
       target="_blank">
   <img
    className="
    absolute
    right-4
    z-10
    h-5
    w-auto
    opacity-80
    md:h-8
    "
    src="/Marca viral-03.png"
    alt="logo_viral"
    />
    </a>
 
</div>


      </main>

      
    </>
  );
}
