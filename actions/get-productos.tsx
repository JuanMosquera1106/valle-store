import { Producto } from '@/types';
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/producto`;

interface Query {
    tipid?: number;        // Filtro por tipo de producto
    proid?: number;        // Filtro por ID de productor
    minPrice?: number;     // Precio mínimo
    maxPrice?: number;     // Precio máximo
}

const getProductos = async (query: Query): Promise<Producto[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            tipid: query.tipid,
            proid: query.proid,
            minPrice: query.minPrice, // Agregamos filtro de precio mínimo
            maxPrice: query.maxPrice, // Agregamos filtro de precio máximo
        },
    });

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener productos");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default getProductos;
