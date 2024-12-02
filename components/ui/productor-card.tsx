"use client";

import { useState } from "react";
import { Productor } from "@/types";
import IconButton from "@/components/ui/icon-button";
import ImageModal from "@/components/ui/image-modal";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { Expand} from "lucide-react";

interface ProductorCardProps {
  data: Productor;
}

const ProductorCard: React.FC<ProductorCardProps> = ({ data }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);


  const handleClick = () => {
    router.push(`/productor/${data.proid}`);
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevenir navegación al hacer clic en expandir
    setModalOpen(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      >
        {/* Images and Actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          {data.profoto ? (
            <Image
              src={data.profoto}
              fill
              alt="Imagen del productor"
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
            </div>
          </div>
        </div>
        {/* Descripcion */}
        <div>
          <p className="font-semibold text-lg">{data.pronombre}</p>
        </div>
        {/* Precio */}

      </div>

      {/* Modal para la imagen ampliada */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={data.profoto}
      />
    </>
  );
};

export default ProductorCard;
