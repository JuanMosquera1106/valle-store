import getProductos from "@/actions/get-productos";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Image from "next/image";

const HomePage = async () => {
    const productos = await getProductos({});
    
    return (
        <Container>
            {/* Sección principal */}
            <section id="inicio">
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

            <section id="Nosotros" className="bg-white px-6 py-4 space-y-12">
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
                    className="mx-auto mb-2"
                />
                <p className="text-sm font-semibold text-white">Desarrollo</p>
                </div>
            </div>
            </section>
            
            {/* Lista de productos */}
            <section className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Productos" items={productos} />
            </section>
        </Container>
    );
};

export default HomePage;
