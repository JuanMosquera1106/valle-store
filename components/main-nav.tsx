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
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {/* Menú desplegable para Tipos */}
      <div className="relative">
        <select
          onChange={handleSelectChange}
          className="border rounded-lg p-2 text-sm transition-colors hover:border-primary focus:outline-none focus:ring focus:ring-primary-light"
          value={routes.find((route) => route.active)?.href || ""}
        >
          <option value="" disabled>
            Tipos
          </option>
          {routes.map((route) => (
            <option key={route.href} value={route.href}>
              {route.label}
            </option>
          ))}
        </select>
      </div>

      {/* Enlace adicional a "Productores" */}
      <Link
        href="/productor"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/productores" ? "text-black font-bold underline" : "text-gray-500"
        )}
      >
        Productores
      </Link>
    </nav>
  );
};

export default MainNav;
