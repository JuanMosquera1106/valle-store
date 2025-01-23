import getProductos from "@/actions/get-productos";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = async () => {
    const productos = await getProductos({});

    const communityImages = [
        {
            src: "https://github.com/JuanMosquera1106/valle-store/blob/imagenes/PHOTO-2022-02-17-11-09-49%20copy.jpg?raw=true",
            alt: "Imagen 1 de la comunidad",
        },
        {
            src: "https://github.com/JuanMosquera1106/valle-store/blob/imagenes/20130719_0003_CariamangaArtisanMarket&PaulaHouse_MW.jpg?raw=true",
            alt: "Imagen 2 de la comunidad",
        },
        {
            src: "https://github.com/JuanMosquera1106/valle-store/blob/imagenes/20130714_0002_BellaMariaArtisans_MW.jpg?raw=true",
            alt: "Imagen 3 de la comunidad",
        },
    ];

    
    return (
        <Container>
            {/* Sección principal */}
            <section id="inicio" className="mt-8">
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
                        Valle de Gigantes es una asociación de familias dedicadas a transformar los recursos
                        naturales de sus comunidades en productos artesanales y orgánicos de alta calidad.
                        Nuestra misión es mejorar las condiciones de vida de nuestras familias a través de la
                        creación de productos que reflejen nuestra riqueza cultural y natural, mientras promovemos
                        la sostenibilidad y el desarrollo comunitario.
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

                {/* Segunda sección: Imagen de abajo ocupando todo el espacio */}
                <div className="px-2 py-4 relative w-full lg:h-[600px] md:h-[400px] h-[300px]">
                    <Image
                        src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/DSC_1957.jpg?raw=true"
                        alt="Tejedora artesanal"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                    />
                </div>
            </section>
        
            {/* Sección de la asociación */}
            <section id="Nosotros">
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
                        <p className="text-center text-sm text-gray-700 mt-4 ">
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
                {/* Iconos con textos */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mt-8 mb-8 bg-brownValle">
                        <div className="space-y-2 p-4">
                        <Image
                            src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/icono-comunidad.png?raw=true"
                            alt="Icono Comunidad"
                            width={120}
                            height={120}
                            className="mx-auto"
                        />
                        <p className="text-sm font-semibold text-white">Comunidad</p>
                        </div>
                        <div className="space-y-2 p-4">
                        <Image
                            src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/icono-calidad.png?raw=true"
                            alt="Icono Calidad y artesanía"
                            width={80}
                            height={80}
                            className="mx-auto"
                        />
                        <p className="text-sm font-semibold text-white">Calidad y artesanía</p>
                        </div>
                        <div className="space-y-2 p-4">
                        <Image
                            src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/icono-sostenibilidad.png?raw=true"
                            alt="Icono Sostenibilidad"
                            width={80}
                            height={80}
                            className="mx-auto"
                        />
                        <p className="text-sm font-semibold text-white">Sostenibilidad</p>
                        </div>
                        <div className="space-y-2 p-4">
                        <Image
                            src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/icono-desarrollo.png?raw=true"
                            alt="Icono Desarrollo"
                            width={100}
                            height={100}
                            className="mx-auto"
                        />
                        <p className="text-sm font-semibold text-white">Desarrollo</p>
                        </div>
                    </div>
                    {/* Segunda sección: Imagen de abajo ocupando todo el espacio */}
                    <div className="px-2 py-4 relative w-full lg:h-[600px] md:h-[400px] h-[300px]">
                        <Image
                            src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/20130714_0002_BellaMariaArtisans_MW.jpg?raw=true"
                            alt="Tejedora artesanal_2"
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <h2 className="text-center text-lg mt-4 mb-4 mr-4 ml-4">
                    "Descubre los sabores auténticos de Ecuador, elaborados con técnicas ancestrales que preservan nuestra cultura y tradiciones".
                    </h2>
                    <div className="h-2 w-12/12 bg-greenValle rounded-full mr-10 ml-10 sm: mr-2 ml-2"/>
            </section>
            
            {/* Lista de productos */}
            <section className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="" items={productos.slice(0, 4)} />
            </section>

            <section>
                <h2 className="text-2xl font-bold text-green-800 text-center mb-6">Conoce nuestra comunidad</h2>
                <div className="flex justify-center items-center">
                    <Carousel className="w-full max-w-sm">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-2xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>

                </div>
                <div className="mt-8 text-center">
                    <p className="text-green-700 font-semibold">
                    Apoyando a Valle de Gigantes, ayudas a transformar vidas y a promover el bienestar en las zonas rurales de Ecuador.
                    </p>
                </div>
            </section>
        </Container>
    );
};

export default HomePage;
