"use client";

import { Producto } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/store/useCartStore"; // Importación corregida

interface InfoProps {
  data: Producto;
}


const Info: React.FC<InfoProps> = ({ data }) => {

  const addToCart = useCartStore((state) => state.addToCart);

const handleAddToCartClick = (e: React.MouseEvent) => {
  e.stopPropagation(); // Prevenir navegación al hacer clic en el carrito
  addToCart(data); // Agregar producto al carrito
};


  return (
    <div>
      {/* Nombre del producto */}
      <h1 className="text-3xl font-bold text-gray-900">{data.prdnombre}</h1>

      {/* Precio */}
      <div className="mt-3 flex items-end justify-between">
        <h2 className="text-2xl text-gray-900">
          <Currency value={data?.prdprecio} />
        </h2>
      </div>

      {/* Descripción */}
      <hr className="my-4" />
      <p className="text-gray-700">{data.prddescripcion}</p>

      {/* Información adicional */}
      <div className="mt-6">
        <div className="flex items-center">
          <span className="font-medium text-gray-900">Tipo:</span>
          <span className="ml-2 text-gray-700">{data.tipo?.tipnombre || "N/A"}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="font-medium text-gray-900">Productor:</span>
          <span className="ml-2 text-gray-700">
            {data.productor?.pronombre || "N/A"}
          </span>
        </div>
      </div>
          
        {/* Botón de compra */}
        <div className="mt-6">
            <Button onClick={handleAddToCartClick} className="flex items-center gap-x-2">
                Agregar al carrito
                <ShoppingCart />
            </Button>
        </div>
    </div>
    
  );
};

export default Info;
