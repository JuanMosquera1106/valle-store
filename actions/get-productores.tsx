import { Productor } from '@/types';
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/productor`;

interface Query {
    pronombre: string; // Filtro por nombre de productor
}

const getProductores = async (query: Query): Promise<Productor[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            pronombre: query.pronombre,
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

export default getProductores;
