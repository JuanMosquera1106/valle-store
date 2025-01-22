"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";

interface CartItemProps {
  product: {
    prdid: string;
    prdnombre: string;
    prdprecio: number;
    prdfoto: string;
  };
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  quantity,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="flex justify-between items-center border-b-2 py-4 border-greenValle">
      {/* Información del producto */}
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <Image
            src={product.prdfoto}
            alt={product.prdnombre}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-medium">{product.prdnombre}</h2>
          <Currency value={product.prdprecio} />
        </div>
      </div>

      {/* Contador de cantidad */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <button
            onClick={() => onUpdateQuantity(product.prdid, quantity + 1)}
            className="px-3 py-1 bg-greenButtonValle hover:bg-gray-300 rounded-l-md"
          >
            +
          </button>
          <span className="px-4 py-1 font-medium text-center">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity(product.prdid, quantity - 1)}
            disabled={quantity === 1}
            className="px-3 py-1 bg-greenButtonValle hover:bg-gray-300 rounded-r-md disabled:opacity-50"
          >
            -
          </button>
        </div>
      </div>

      {/* Botón de eliminar */}
      <Button
        onClick={() => onRemove(product.prdid)}
        className="bg-redButtonValle text-white hover:bg-red-600"
      >
        Eliminar
      </Button>
    </div>
  );
};

export default CartItem;
