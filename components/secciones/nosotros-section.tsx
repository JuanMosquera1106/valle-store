import Image from "next/image";

const NosotrosSection = () => {
  return (
    <section id="Nosotros" className="scroll-mt-[70px]">
    <section className="bg-white px-6 py-4 space-y-12">
      {/* Título */}
      <p className="text-center text-2x1 text-brownValle">
        La asociación trabaja en la transformación de productos agrícolas y ganaderos locales
      </p>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: Mapa y descripción */}
        <div className="bg-greenButtonValle p-6 rounded-lg shadow-md">
          <Image
            src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/20130719_0003_CariamangaArtisanMarket&PaulaHouse_MW.jpg?raw=true"
            alt="Mapa de comunidades"
            width={400}
            height={400}
            className="h-auto object-contain justify-self-center"
          />
          <p className="text-center text-sm text-gray-700 mt-4">
            Fue fundada en el año 2020 por familias de las comunidades de Bellamaría, Guara y Chaquizhca.
          </p>
        </div>

        {/* Columna derecha: Texto y botón */}
        <div className="flex flex-col justify-center space-y-6 text-gray-700 text-center items-center">
          <p className="text-lg leading-7">
            Las tres comunidades se encuentran en zonas rurales de condiciones socioeconómicas desafiantes. Para su sustento, las familias dependen de la venta de producción agrícola o del trabajo manual, lo que hace que sus ingresos familiares sean inestables o insuficientes. Ante esta situación, las familias decidieron asociarse para crear una organización formal que les permitiera aprovechar sus recursos naturales y culturales.
          </p>
          <button className="bg-greenValle text-white py-2 px-4 rounded-full hover:bg-green-600">
            Conoce nuestra comunidad
          </button>
        </div>
      </div>
    </section>
          {/* Imagen de abajo */}
          <div className="px-2 py-4 relative w-full lg:h-[600px] md:h-[400px] h-[300px]">
        <Image
          src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/20130714_0002_BellaMariaArtisans_MW.jpg?raw=true"
          alt="Tejedora artesanal 2"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default NosotrosSection;
