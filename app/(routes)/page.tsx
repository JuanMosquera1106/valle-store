import getProductos from "@/actions/get-productos";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

const HomePage = async () => {
    const productos = await getProductos({});
    
    return (
        <Container>
            <div  className="space-y-10 pb-10">
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 alai">
                <ProductList title="Productos" items={productos}/>
            </div>
        </Container>
    );
};

export default HomePage;