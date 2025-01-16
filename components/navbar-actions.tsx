"use client";

import Button from "@/components/ui/button";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import useCartStore from "@/store/useCartStore";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const router = useRouter();
  const totalQuantity = useCartStore((state) => state.totalQuantity); // Subscribirse a `totalQuantity`

  const handleCartClick = () => {
    router.push("/cart"); // Redirigir a la página del carrito
  };

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-greenValle px-4 py-2"
        onClick={handleCartClick}
      >
        <ShoppingCart size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {totalQuantity} {/* Mostrar la cantidad total de productos en el carrito */}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
