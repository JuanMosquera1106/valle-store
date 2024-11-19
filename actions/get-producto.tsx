import { Producto } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/producto`; // Reemplaza con la URL exacta de tu API

const getProducto = async (prdid: string): Promise<Producto> => {
    const res = await fetch(`${URL}/${prdid}`);
    
    return res.json();
}

export default getProducto;