import { Pedido } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/pedido`;

export const createOrder = async (pedido: {
  clid: number;
  productos: { prdid: number; cantidad: number }[];
  total: number;
}): Promise<Pedido | null> => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pedfecha: new Date().toISOString(), // Fecha actual
        pedtotal: pedido.total,
        clid: pedido.clid,
        productos: pedido.productos,
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error("[ERROR: createOrder]", errorMessage);
      throw new Error(errorMessage || "Error al crear el pedido");
    }

    return await response.json();
  } catch (error) {
    console.error("[ERROR: createOrder]", error);
    return null;
  }
};
