"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tipo } from "@/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/boton";
import { Menu } from "lucide-react";

interface MainNavProps {
  data: Tipo[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Construcción de rutas
  const routes = data.map((route) => ({
    href: `/tipo/${route.tipid}`,
    label: route.tipnombre,
    active: pathname === `/tipo/${route.tipid}`,
  }));

  return (
    <nav className="w-full lg:mr-4 mr-1">
      {/* Menú en pantallas grandes */}
      <div className="hidden lg:flex items-center justify-end space-x-4">
        {/* Enlace adicional a "Inicio" */}
        <Link
          href="/#inicio"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/inicio" ? "text-black font-bold underline" : "text-greenValle"
          )}
        >
          Inicio
        </Link>

        {/* Enlace adicional a "Comunidad" */}
        <Link
          href="/#Comunidad"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/productores"
              ? "text-greenValle font-bold underline"
              : "text-greenValle"
          )}
        >
          Comunidad
        </Link>

        {/* Enlace adicional a "Nosotros" */}
        <Link
          href="/#Nosotros"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/info" ? "text-greenValle font-bold underline" : "text-greenValle"
          )}
        >
          Nosotros
        </Link>

        {/* Menú desplegable para Tienda por Tipos */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="border rounded-lg p-2 text-sm text-greenValle">
              Tienda
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white shadow-lg">
            {routes.map((route) => (
              <DropdownMenuItem key={route.href} asChild>
                <Link href={route.href} className="text-greenValle">
                  {route.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Menú hamburguesa para pantallas pequeñas */}
      <div className="flex lg:hidden items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="h-6 w-6 text-greenValle" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white shadow-lg">
            <DropdownMenuItem asChild>
              <Link className="text-greenValle" href="/#inicio">
                Inicio
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link className="text-greenValle" href="/#Comunidad">
                Comunidad
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link className="text-greenValle" href="/#Nosotros">
                Nosotros
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="border rounded-lg p-2 text-sm text-greenValle">
                    Tienda
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white shadow-lg">
                  {routes.map((route) => (
                    <DropdownMenuItem key={route.href} asChild>
                      <Link href={route.href} className="text-greenValle">
                        {route.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default MainNav;
