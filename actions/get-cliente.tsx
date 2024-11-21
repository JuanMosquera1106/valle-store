import { Cliente } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cliente`;

// Obtener un cliente por correo o cédula
export const fetchClient = async (clicorreo?: string, clici?: string): Promise<Cliente | null> => {
  try {
    const searchParams = new URLSearchParams();
    if (clicorreo) searchParams.append("clicorreo", clicorreo);
    if (clici) searchParams.append("clici", clici);

    const response = await fetch(`${URL}?${searchParams.toString()}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      if (response.status === 404) return null; // Si no se encuentra, retornar null
      throw new Error("Error al buscar cliente");
    }

    return await response.json();
  } catch (error) {
    console.error("[ERROR: fetchClient]", error);
    return null;
  }
};

// Registrar un nuevo cliente
export const registerClient = async (
  cliente: Omit<Cliente, "clid" | "pedidos">
): Promise<Cliente | null> => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });

    if (!response.ok) {
      throw new Error("Error al registrar cliente");
    }

    return await response.json();
  } catch (error) {
    console.error("[ERROR: registerClient]", error);
    return null;
  }
};

// Actualizar un cliente existente
export const updateClient = async (
  clid: number,
  cliente: Omit<Cliente, "clid" | "pedidos">
): Promise<Cliente | null> => {
  try {
    const response = await fetch(`${URL}/${clid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar cliente");
    }

    return await response.json();
  } catch (error) {
    console.error("[ERROR: updateClient]", error);
    return null;
  }
};
