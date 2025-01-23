import getProductos from "@/actions/get-productos";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Image from "next/image";

const HomePage = async () => {
    const productos = await getProductos({});
    
    return (
        <Container>
            {/* Sección de bienvenida */}
            <section className="space-y-6 text-center pb-12">
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <Image 
                        src="https://drive.google.com/file/d/1Z3JFv5GYNui7FrXcAuqQopajdxOj25aX/view" 
                        alt="Logo Valle de Gigantes" 
                        width={150} 
                        height={150} 
                        className="mb-4"
                    />
                    <h1 className="text-4xl font-bold text-greenValle">
                        Valle de Gigantes
                    </h1>
                    <p className="mt-4 text-gray-700 max-w-2xl">
                        Valle de Gigantes es una asociación de familias dedicadas a transformar los recursos naturales de sus comunidades en productos artesanales y orgánicos de alta calidad.
                        Nuestra misión es mejorar las condiciones de vida de nuestras familias a través de la creación de productos que reflejen nuestra riqueza cultural y natural, mientras promovemos la sostenibilidad y el desarrollo comunitario.
                    </p>
                </div>
                
                {/* Imágenes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <Image 
                        src="" 
                        alt="Campesina con vegetales" 
                        width={500} 
                        height={500} 
                        className="rounded-lg"
                    />
                    <Image 
                        src="/images/farmer-2.jpg" 
                        alt="Tejedora artesanal" 
                        width={500} 
                        height={500} 
                        className="rounded-lg"
                    />
                </div>
                
                <p className="text-sm text-gray-600 mt-4">
                    La asociación trabaja en la transformación de productos agrícolas y ganaderos locales
                </p>
            </section>
            
            {/* Lista de productos */}
            <section className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Productos" items={productos} />
            </section>
        </Container>
    );
};

export default HomePage;
