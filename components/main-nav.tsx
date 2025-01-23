"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tipo } from "@/types";

interface MainNavProps {
  data: Tipo[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  // Construcción de rutas
  const routes = data.map((route) => ({
    href: `/tipo/${route.tipid}`,
    label: route.tipnombre,
    active: pathname === `/tipo/${route.tipid}`,
  }));

  // Manejo del cambio en la lista desplegable
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedHref = event.target.value;
    if (selectedHref) {
      window.location.href = selectedHref;
    }
  };

  return (
    <nav className="mr-5 flex items-center space-x-4 lg:space-x-6 justify-end w-full">

            {/* Enlace adicional a "Inicio" */}
      <Link
          href="/"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/inicio" ? "text-black font-bold underline" : "text-greenValle"
          )}
      >
          Inicio
      </Link>

      {/* Enlace adicional a "Comunidad" */}
      <Link
        href="/productor"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/productores" ? "text-greenValle font-bold underline" : "text-greenValle"
        )}
      >
        Comunidad
      </Link>

      {/* Enlace adicional a "Nosotros" */}
      <Link
        href="/info"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/info" ? "text-greenValle font-bold underline" : "text-greenValle"
        )}
      >
        Nosotros
      </Link>

      {/* Menú desplegable para Tienda por Tipos */}
      <div className="relative">
        <select
          onChange={handleSelectChange}
          className="border rounded-lg p-2 text-sm transition-colors hover:border-primary focus:outline-none focus:ring focus:ring-primary-light text-greenValle"
          value={routes.find((route) => route.active)?.href || ""}
        >
          <option value="" disabled>
            Tienda
          </option>
          {routes.map((route) => (
            <option key={route.href} value={route.href}>
              {route.label}
            </option>
          ))}
        </select>
      </div>

    </nav>
  );
};

export default MainNav;
