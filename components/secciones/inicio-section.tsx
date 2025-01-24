import Image from "next/image";

const InicioSection = () => {
  return (
    <section id="inicio" className="mt-4 scroll-mt-[80px]">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-6 py-4">
        {/* Columna izquierda: Logo y texto */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-4">
          <Image
            src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/ValleDeGigantes_Color.png?raw=true"
            alt="Logo Valle de Gigantes"
            width={450}
            height={450}
            className="mb-4"
          />
          <p className="text-gray-700 text-lg leading-7 mr-4">
            Valle de Gigantes es una asociación de familias dedicadas a transformar los recursos naturales de sus comunidades en productos artesanales y orgánicos de alta calidad. Nuestra misión es mejorar las condiciones de vida de nuestras familias a través de la creación de productos que reflejen nuestra riqueza cultural y natural, mientras promovemos la sostenibilidad y el desarrollo comunitario.
          </p>
        </div>
        {/* Columna derecha: Imagen */}
        <div className="relative w-full h-[500px]">
          <Image
            src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/PHOTO-2022-02-17-11-09-49%20copy.jpg?raw=true"
            alt="Campesina con vegetales"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Imagen de abajo */}
      <div className="px-2 py-4 relative w-full lg:h-[600px] md:h-[400px] h-[300px]">
        <Image
          src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/DSC_1957.jpg?raw=true"
          alt="Tejedora artesanal"
          fill
          className="object-cover rounded-lg shadow-lg object-top"
        />
      </div>
    </section>
  );
};

export default InicioSection;
