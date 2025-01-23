import { Producto } from '@/types';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';

interface ProductListProps {
    title: string;
    items: Producto[] | null | undefined; // Acepta `null` o `undefined` también
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
    return (
        <div className="space-y-4 mb-10">
            <h3 className="font-bold text-3xl text-greenValle">{title}</h3>
            {(items && items.length === 0) && <NoResults />}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items && items.length > 0 ? (
                    items.map((item) => (
                        <ProductCard key={item.prdid} data={item} /> // Pasar el objeto completo `item`
                    ))
                ) : (
                    <NoResults /> // Alternativa en caso de que `items` sea `null` o vacío
                )}
            </div>
        </div>
        
    );
};

export default ProductList;
