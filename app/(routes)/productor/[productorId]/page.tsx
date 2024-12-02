import getProductor from "@/actions/get-productor";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info-pro";

interface ProductorPageProps {
    params: {
        productorId: string;
    }
}

const ProductorPage: React.FC<ProductorPageProps> = async props => {
    const params = await props.params;
    const productor = await getProductor (params.productorId);
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={[productor.profoto]}/>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={productor}/>
                        </div>
                    </div>
                    <hr className="my-10" />
                </div>
            </Container>
        </div>
    );
}

export default ProductorPage;