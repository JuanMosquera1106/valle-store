import InteractiveCarousel from "@/components/ui/interactive-carousel";
import Image from 'next/image';

interface ComunidadSectionProps {
  images: { src: string; alt: string }[];
}

const ComunidadSection = ({ images }: ComunidadSectionProps) => {
  return (
    <section id="Comunidad" className="scroll-mt-[80px]">
      <div className="flex">
        <div className="bg-greenValle rounded-r-full px-6 py-3 sm:ml-1 mb-2 ml-2">
          <h2 className="text-white text-lg font-bold mr-10">Conoce nuestra comunidad</h2>
        </div>
      </div>
      <InteractiveCarousel images={images} />
      <div className="h-2 w-12/12 bg-greenValle rounded-full mr-10 ml-10 sm:mr-2 ml-2 mt-4" />
      <div className="mt-8 text-center mr-4 ml-4">
        <p className="text-lg">
          Apoyando a Valle de Gigantes, ayudas a transformar vidas y a promover el bienestar en las zonas rurales de Ecuador.
        </p>
      </div>
    {/* Imagen de abajo */}
    <div className="px-2 py-4 relative w-full lg:h-[600px] md:h-[400px] h-[300px] mt-4">
    <Image
        src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/8.jpg?raw=true"
        alt="Agricultura comunitaria"
        fill
        className="object-cover object-top rounded-lg shadow-lg"
    />
    </div>
    </section>
  );
};

export default ComunidadSection;
