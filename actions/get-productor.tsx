import { Productor } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/productor`; // Reemplaza con la URL exacta de tu API

const getProducto = async (proid: string): Promise<Productor> => {
    const res = await fetch(`${URL}/${proid}`);
    
    return res.json();
}

export default getProducto;