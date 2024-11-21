"use client";

import { useState } from "react";
import { Producto } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import ImageModal from "@/components/ui/image-modal";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/useCartStore"; // Importación corregida

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  data: Producto;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  // Estado global del carrito
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClick = () => {
    router.push(`/producto/${data.prdid}`);
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevenir navegación al hacer clic en expandir
    setModalOpen(true);
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevenir navegación al hacer clic en el carrito
    addToCart(data); // Agregar producto al carrito
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      >
        {/* Images and Actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          {data.prdfoto ? (
            <Image
              src={data.prdfoto}
              fill
              alt="Imagen del producto"
              className="aspect-square object-cover rounded-md"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
              Sin imagen
            </div>
          )}
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={handleExpandClick}
                icon={<Expand size={20} className="text-gray-600" />}
              />
              <IconButton
                onClick={handleAddToCartClick}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
        {/* Descripcion */}
        <div>
          <p className="font-semibold text-lg">{data.prdnombre}</p>
          <p className="text-sm text-gray-500">{data.tipo?.tipnombre}</p>
        </div>
        {/* Precio */}
        <div className="flex items-center justify-between">
          <Currency value={data?.prdprecio} />
        </div>
      </div>

      {/* Modal para la imagen ampliada */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={data.prdfoto}
      />
    </>
  );
};

export default ProductCard;
