import getProductores from "@/actions/get-productores";
import Container from "@/components/ui/container";
import ProductorList from "@/components/productor-list";

const ProductoresPage = async () => {
    const productores = await getProductores({ pronombre: "" });
    
    return (
        <Container>
            <div  className="space-y-10 pb-10">
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductorList title="Nuestra Comunidad" items={productores}/>
            </div>
        </Container>
    );
};

export default ProductoresPage;