import { Producto } from '@/types';
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/producto`; // Reemplaza con la URL exacta de tu API

interface Query {
    tipid?: number;
    proid?: number;
}

const getProductos = async (query:Query): Promise<Producto[]> => {
    const url =qs.stringifyUrl({
        url: URL,
        query: {
            tipid: query.tipid,
            proid: query.proid
        }
    });

    const rest = await fetch(URL);

    return rest.json();
};


export default getProductos;
