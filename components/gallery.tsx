"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[]; // Lista de imágenes principales (producto)
  nutritionImage?: string; // Imagen del contenido nutricional
}

const Gallery: React.FC<GalleryProps> = ({ images, nutritionImage }) => {
  // Validar imágenes principales
  const validImages = images.filter((image) => isValidUrl(image));

  // Agregar la imagen nutricional si es válida
  if (nutritionImage && isValidUrl(nutritionImage)) {
    validImages.push(nutritionImage);
  }

  // Usar la primera imagen válida como seleccionada inicialmente
  const [selectedImage, setSelectedImage] = useState(validImages[0] || "");

  if (validImages.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-64 bg-gray-100">
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div>
      {/* Imagen principal */}
      <div className="aspect-w-1 aspect-h-1 w-full mb-4">
        <Image
          src={selectedImage}
          alt="Imagen seleccionada"
          className="object-cover rounded-md"
          width={500}
          height={500}
        />
      </div>

      {/* Miniaturas */}
      <div className="flex space-x-4">
        {validImages.map((thumbnail, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(thumbnail)} // Cambiar imagen al hacer clic
            className={`cursor-pointer rounded-md border ${
              selectedImage === thumbnail ? "border-gray-900" : "border-gray-300"
            }`}
          >
            <Image
              src={thumbnail}
              alt={`Miniatura ${index + 1}`}
              className="object-cover rounded-md"
              width={75}
              height={75}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Función para validar URLs
function isValidUrl(url: string): boolean {
  try {
    new URL(url); // Intentar construir un objeto URL
    return true;
  } catch {
    return false;
  }
}

export default Gallery;
