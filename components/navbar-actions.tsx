"use client";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import useCartStore from "@/store/useCartStore"; // Asegúrate de que este path sea correcto.
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { items } = useCartStore(); // Obtener los ítems del carrito desde Zustand.
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleCartClick = () => {
    router.push("/cart"); // Redirigir a la página del carrito.
  };

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={handleCartClick}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length} {/* Mostrar la cantidad de ítems en el carrito */}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
