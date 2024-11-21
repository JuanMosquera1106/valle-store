"use client";

import { useState, useEffect } from "react";
import { Cliente } from "@/types";
import { registerClient, updateClient } from "@/actions/get-cliente";
import { createOrder } from "@/actions/get-pedido";
import ClientCard from "@/components/ui/cliente-card";
import RegisterClientForm from "@/components/register-client-form";
import useCartStore from "@/store/useCartStore";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

const TransferPage = () => {
  const { items, clearCart } = useCartStore();
  const [client, setClient] = useState<Cliente | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);

  const total = items.reduce((sum, item) => sum + item.product.prdprecio * item.quantity, 0);

  // Cargar datos del cliente desde localStorage
  useEffect(() => {
    const savedClient = localStorage.getItem("client");
    if (savedClient) {
      setClient(JSON.parse(savedClient));
    }
  }, []);

  const saveClientToLocalStorage = (client: Cliente) => {
    localStorage.setItem("client", JSON.stringify(client));
  };

  // Manejar registro o actualización del cliente
  const handleRegisterOrUpdateClient = async (data: {
    clinombre: string;
    clicorreo: string;
    clitelefono?: string;
    clici?: string;
  }) => {
    try {
      let updatedClient: Cliente | null = null;

      if (client) {
        // Si el cliente ya existe, actualizarlo
        updatedClient = await updateClient(client.clid, {
          clinombre: data.clinombre,
          clicorreo: data.clicorreo,
          clitelefono: data.clitelefono || "", // Convertir undefined a string vacío
          clici: data.clici || "", // Convertir undefined a string vacío
        });
      } else {
        // Si no hay cliente en el estado, registrarlo
        updatedClient = await registerClient({
          clinombre: data.clinombre,
          clicorreo: data.clicorreo,
          clitelefono: data.clitelefono || "",
          clici: data.clici || "",
        });
      }

      if (updatedClient) {
        setClient(updatedClient);
        saveClientToLocalStorage(updatedClient);
        setIsEditing(false);
      } else {
        alert("No se pudo procesar la solicitud.");
      }
    } catch (error) {
      console.error("Error al registrar o actualizar el cliente:", error);
    }
  };

  const handlePlaceOrder = async () => {
    if (!client) {
      alert("Registra o actualiza tus datos primero.");
      return;
    }

    const productos = items.map((item) => ({
      prdid: item.product.prdid,
      cantidad: item.quantity,
    }));

    const pedido = await createOrder({
      clid: client.clid,
      productos,
      total,
    });

    if (pedido) {
      setOrderId(pedido.peid);
      setIsOrderPlaced(true);
      clearCart();
    } else {
      alert("Hubo un error al procesar el pedido.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Pago por Transferencia Bancaria</h1>
      {isEditing || !client ? (
        <RegisterClientForm
          initialData={client || undefined}
          onSubmit={handleRegisterOrUpdateClient} // Manejar datos correctamente
        />
      ) : (
        <ClientCard clientData={client} onEdit={() => setIsEditing(true)} />
      )}
      <div className="mt-6 space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Instrucciones para Transferencia</h2>
          <p>Banco: Banco Ejemplo</p>
          <p>Cuenta: 123456789</p>
          <p>Referencia: Número de Pedido: {orderId || "pendiente"}</p>
        </div>
        <div>
          {items.map((item) => (
            <div key={item.product.prdid} className="flex justify-between items-center">
              <div>
                <h3>{item.product.prdnombre}</h3>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <Currency value={item.product.prdprecio * item.quantity} />
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <Currency value={total} />
          </div>
        </div>
        {!isOrderPlaced ? (
          <Button onClick={handlePlaceOrder} className="bg-green-500 text-white">
            Confirmar Pedido
          </Button>
        ) : (
          <p>Pedido confirmado. Gracias por tu compra.</p>
        )}
      </div>
    </div>
  );
};

export default TransferPage;
