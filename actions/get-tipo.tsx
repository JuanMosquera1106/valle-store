import { Tipo } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/tipo`;

const getTipo = async (tipid: number): Promise<Tipo | null> => {
  try {
    const response = await fetch(`${URL}/${tipid}`);

    if (!response.ok) {
      throw new Error("Error al obtener el tipo");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getTipo;
