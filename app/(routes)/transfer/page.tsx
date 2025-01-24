"use client";

import { useState, useEffect } from "react";
import { Cliente } from "@/types";
import { registerClient, updateClient } from "@/actions/get-cliente";
import { createOrder } from "@/actions/get-pedido";
import ClientCard from "@/components/ui/cliente-card";
import RegisterClientForm from "@/components/register-client-form";
import useCartStore from "@/store/useCartStore";
import Button from "@/components/ui/button";
import CartItem from "@/components/cart-item";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const TransferPage = () => {
  const router = useRouter();
  const {
    items,
    updateQuantity: updateQuantityNumber,
    removeFromCart: removeFromCartNumber,
  } = useCartStore();

  const updateQuantity = (id: string, quantity: number) => {
    updateQuantityNumber(Number(id), quantity);
  };

  const removeFromCart = (id: string) => {
    removeFromCartNumber(Number(id));
  };

  const [client, setClient] = useState<Cliente | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);

  const total = items.reduce(
    (sum, item) => sum + item.product.prdprecio * item.quantity,
    0
  );

  useEffect(() => {
    const savedClient = localStorage.getItem("client");
    if (savedClient) {
      setClient(JSON.parse(savedClient));
    }
  }, []);

  const saveClientToLocalStorage = (client: Cliente) => {
    localStorage.setItem("client", JSON.stringify(client));
  };

  const handleRegisterOrUpdateClient = async (data: {
    clinombre: string;
    clicorreo: string;
    clitelefono?: string;
    clici?: string;
  }) => {
    try {
      let updatedClient: Cliente | null = null;

      if (client) {
        updatedClient = await updateClient(client.clid, {
          clinombre: data.clinombre,
          clicorreo: data.clicorreo,
          clitelefono: data.clitelefono || "",
          clici: data.clici || "",
        });
      } else {
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
        toast.success("Cliente registrado o actualizado con éxito.");
      } else {
        toast.error("No se pudo procesar la solicitud.");
      }
    } catch (error) {
      console.error("Error al registrar o actualizar el cliente:", error);
      toast.error("Hubo un error al procesar los datos del cliente.");
    }
  };

  const handlePlaceOrder = async () => {
    if (!client) {
      toast.error("Registra o actualiza tus datos primero.");
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
      toast.success("Pedido confirmado con éxito.");
    } else {
      toast.error("Hubo un error al procesar el pedido.");
    }
  };

  const handleCancelOrder = () => {
    router.push("/cart"); // Redirige al usuario a la página del carrito
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-greenValle">
        Pago por Transferencia Bancaria
      </h1>
      {isEditing || !client ? (
        <RegisterClientForm
          initialData={client || undefined}
          onSubmit={handleRegisterOrUpdateClient}
        />
      ) : (
        <ClientCard clientData={client} onEdit={() => setIsEditing(true)} />
      )}
      <div className="mt-6 space-y-6">
        <div className="bg-greenButtonValle p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Instrucciones para Transferencia</h2>
          <p>
            <span className="font-semibold">Banco:</span> Banco Ejemplo
          </p>
          <p>
            <span className="font-semibold">Cuenta:</span> 123456789
          </p>
          <p>
            <span className="font-semibold">Referencia:</span> Número de Pedido:{" "}
            {orderId || "pendiente"}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.product.prdid}
              product={{ ...item.product, prdid: item.product.prdid.toString() }}
              quantity={item.quantity}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 mt-6">
          <Button
            onClick={handlePlaceOrder}
            className="bg-greenButtonValle2 hover:bg-green-600 text-white px-4 py-2 w-full sm:w-auto"
          >
            Confirmar Pedido
          </Button>
          <Button
            onClick={handleCancelOrder}
            className="bg-redButtonValle text-white hover:bg-red-600 px-4 py-2 w-full sm:w-auto"
          >
            Cancelar Pedido
          </Button>
        </div>

      </div>
    </div>
  );
};

export default TransferPage;
