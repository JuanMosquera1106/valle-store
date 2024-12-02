import { Productor } from '@/types';
import NoResults from '@/components/ui/no-results';
import ProductorCard from '@/components/ui/productor-card';

interface ProductorListProps {
    title: string;
    items: Productor[] | null | undefined; // Acepta `null` o `undefined` también
}

const ProductorList: React.FC<ProductorListProps> = ({
    title,
    items
}) => {
    return (
        <div className="space-y-4 mb-10">
            <h3 className="font-bold text-3xl">{title}</h3>
            {(items && items.length === 0) && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items && items.length > 0 ? (
                    items.map((item) => (
                        <ProductorCard key={item.proid} data={item} /> // Pasar el objeto completo `item`
                    ))
                ) : (
                    <NoResults /> // Alternativa en caso de que `items` sea `null` o vacío
                )}
            </div>
        </div>
        
    );
};

export default ProductorList;
