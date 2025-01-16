"use client";

import useCartStore from "@/store/useCartStore";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter(); // Mueve useRouter aquí
  const { items, clearCart, removeFromCart, updateQuantity } = useCartStore();

  const handleCheckout = () => {
    router.push("/transfer");
  };

  // Calcular el total del carrito
  const total = items.reduce(
    (sum, item) => sum + item.product.prdprecio * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-greenValle">Carrito</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.prdid}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={item.product.prdfoto}
                      alt={item.product.prdnombre}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium">{item.product.prdnombre}</h2>
                    <Currency value={item.product.prdprecio} />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {/* Botones para cantidad */}
                  <button
                    onClick={() =>
                      updateQuantity(item.product.prdid, item.quantity + 1)
                    }
                    className="px-3 py-1 border rounded-md bg-greenButtonValle hover:bg-gray-300"
                  >
                    +
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.prdid, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                    className="px-3 py-1 border rounded-md bg-greenButtonValle hover:bg-gray-300 disabled:opacity-50"
                  >
                    -
                  </button>
                </div>
                <Button
                  onClick={() => removeFromCart(item.product.prdid)}
                  className="bg-red-500 text-white hover:bg-red-600"
                >
                  Eliminar
                </Button>
              </div>
            ))}
          </div>

          {/* Total y mensaje de costo de envío */}
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Costo de envío</h2>
              <p className="text-gray-500">
                El valor del transporte depende de las tarifas del transportista.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Total</h2>
              <Currency value={total} />
            </div>
          </div>

          {/* Botones de acciones */}
          <div className="mt-6 flex justify-between items-center">
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleCheckout}
            >
              Proceder al Pago
            </Button>
            <Button
              className="bg-red-500 text-white hover:bg-red-600"
              onClick={clearCart}
            >
              Vaciar Carrito
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
