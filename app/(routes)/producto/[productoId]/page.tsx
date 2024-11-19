import getProducto from "@/actions/get-producto";
import getProductos from "@/actions/get-productos";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
    params: {
        productoId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const producto = await getProducto (params.productoId);
    const suggestedProducts = await getProductos({
        tipid: producto?.tipo?.tipid
    })
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Galleria */}
                        <div>Galería</div>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            {/* Info */}
                            Info
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList title="Productos sugeridos" items={suggestedProducts} />
                </div>
            </Container>
        </div>
    );
}

export default ProductPage;