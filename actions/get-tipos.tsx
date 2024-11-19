import { Tipo } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/tipo`; // Reemplaza con la URL exacta de tu API

const getTipos = async (): Promise<Tipo[]> => {
    try {
        const res = await fetch(URL);

        if (!res.ok) {
            throw new Error(`Error en la respuesta: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // Verifica si data es un array y tiene la estructura correcta
        if (!Array.isArray(data)) {
            throw new Error("La respuesta de la API no es un array");
        }

        return data;
    } catch (error) {
        console.error("Error al obtener los tipos:", error);
        return [];
    }
};


export default getTipos;
