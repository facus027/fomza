import Head from "./Head";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";


export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <>
   
  <section className="w-full fixed z-30">
     <Head/>

      <div className="bg-violet_darck text-white md:p-4 p-0.5 text-lg ">
        {/* Botón hamburguesa */}
          <button
            className="lg:hidden text-primary focus:outline-none ml-2 z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
       <nav
          className={`absolute lg:static left-0 mx-auto transition-all duration-300 w-full ease-in-out lg:opacity-100 lg:translate-y-0 z-[55]
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5 pointer-events-none lg:pointer-events-auto"
            }`}
        >
          <ul className="flex flex-col lg:flex-row justify-between px-32 w-full mx-auto items-center gap-4 lg:gap-0 py-4 lg:py-0 bg-background-secondary/95 lg:bg-transparent rounded-xl shadow-lg lg:shadow-none lg:mx-0">
            {[
              { to: "quienes", label: "¿Quiénes somos?" },
              { to: "mision", label: "Misión y visión" },
              { to: "profesionales", label: "Profesionales" },
              { to: "nuestro", label: "Nuestro centro" },
              { to: "obras", label: "Obras sociales" },
              { to: "contacto", label: "Contacto" },
            ].map((item) => (
              <li
                key={item.to}
                className="md:mx-5 xs:mx-3 mx-2 mb-1 md:mb-0 whitespace-nowrap"
              >
              
                  <LinkScroll
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-200}
                  onClick={() => setMenuOpen(false)}
                  className="transition-all hover:text-primary-light text-primary xs:text-base md:text-xl text-lg font-bold font-orbit tracking-wider cursor-pointer"
                >
                  {item.label}
                </LinkScroll>
              
              </li>
            ))}
          </ul>
        </nav>
{/* Fondo oscuro (overlay mobile) */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[50] lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      
      </div>

      
  </section>

     
   </>
  );
}

