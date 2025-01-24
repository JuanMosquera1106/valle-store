import getProductos from "@/actions/get-productos";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Image from "next/image";
import InteractiveCarousel from "@/components/ui/interactive-carousel";
import InicioSection from "@/components/secciones/inicio-section";
import NosotrosSection from "@/components/secciones/nosotros-section";
import ComunidadSection from "@/components/secciones/comunidad-section";

const HomePage = async () => {
    const productos = await getProductos({});

    const communityImages = [
        {
            src: "https://github.com/JuanMosquera1106/valle-store/blob/imagenes/DSC_0954.jpg?raw=true",
            alt: "Imagen 1 de la comunidad",
        },
        {
            src: "https://github.com/JuanMosquera1106/valle-store/blob/imagenes/IMG_6557.jpg?raw=true",
            alt: "Imagen 2 de la comunidad",
        },
        {
            src: "https://github.com/JuanMosquera1106/valle-store/blob/imagenes/IMG_6420.jpg?raw=true",
            alt: "Imagen 3 de la comunidad",
        },
        {
            src: "https://github.com/JuanMosquera1106/valle-store/blob/imagenes/IMG_6363.jpg?raw=true",
            alt: "Imagen 4 de la comunidad",
        },
        {
            src: "https://github.com/JuanMosquera1106/valle-store/blob/imagenes/IMG_6342.jpg?raw=true",
            alt: "Imagen 5 de la comunidad",
        },
    ];

    
    return (
        <Container>
            {/* Sección principal */}
            <InicioSection />
            {/* Sección de la asociación */}
            <NosotrosSection />
            {/* Lista de productos */}
            <section className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="" items={productos.slice(0, 4)} />
            </section>
            {/* Sección del carrusel */}
            <ComunidadSection images={communityImages} />
        </Container>
    );
};

export default HomePage;
