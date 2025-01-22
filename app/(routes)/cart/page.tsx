"use client";

import useCartStore from "@/store/useCartStore";
import Button from "@/components/ui/button";
import CartDetails from "@/components/cart-details";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const { items: rawItems, clearCart, removeFromCart: rawRemoveFromCart, updateQuantity: rawUpdateQuantity } =
    useCartStore();

  // Convertir `prdid` a string para asegurar compatibilidad
  const items = rawItems.map((item) => ({
    ...item,
    product: {
      ...item.product,
      prdid: item.product.prdid.toString(),
    },
  }));

  const total = items.reduce(
    (sum, item) => sum + item.product.prdprecio * item.quantity,
    0
  );

  const updateQuantity = (id: string, quantity: number) => {
    rawUpdateQuantity(Number(id), quantity);
  };

  const removeFromCart = (id: string) => {
    rawRemoveFromCart(Number(id));
  };

  const handleCheckout = () => {
    router.push("/transfer");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-greenValle">Carrito</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-6">
          {/* Detalles del carrito */}
          <CartDetails
            items={items}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            total={total}
          />

          {/* Botones de acciones */}
          <div className="mt-6 flex justify-between items-center">
            <Button
              className="text-white hover:bg-gray-800 bg-yellowButtonValle"
              onClick={handleCheckout}
            >
              Proceder al Pago
            </Button>
            <Button
              className="bg-redButtonValle text-white hover:bg-red-600"
              onClick={clearCart}
            >
              Vaciar Carrito
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
