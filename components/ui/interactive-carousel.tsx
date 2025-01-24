"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

interface InteractiveCarouselProps {
  images: { src: string; alt: string }[];
}

const InteractiveCarousel: React.FC<InteractiveCarouselProps> = ({ images }) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [visibleItems, setVisibleItems] = React.useState(1);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3); // 3 imágenes por fila en pantallas grandes
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2); // 2 imágenes por fila en pantallas medianas
      } else {
        setVisibleItems(1); // 1 imagen por fila en pantallas pequeñas
      }
    };

    updateVisibleItems(); // Ejecutar al cargar
    window.addEventListener("resize", updateVisibleItems); // Escuchar cambios de tamaño

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Carrusel */}
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ slidesToScroll: visibleItems }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className={
                visibleItems === 1
                  ? "basis-full"
                  : visibleItems === 2
                  ? "basis-1/2"
                  : "basis-1/3"
              }
            >
              <Card>
                <CardContent className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navegación con puntos */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(images.length / visibleItems) }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-greenValle" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveCarousel;