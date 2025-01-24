"use client";

import CartItem from "@/components/cart-item";
import Currency from "@/components/ui/currency";

interface CartDetailsProps {
  items: {
    product: {
      prdid: string;
      prdnombre: string;
      prdprecio: number;
      prdfoto: string;
    };
    quantity: number;
  }[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  total: number;
}

const CartDetails: React.FC<CartDetailsProps> = ({
  items,
  onUpdateQuantity,
  onRemove,
  total,
}) => {
  return (
    <div className="space-y-6">
      {/* Lista de productos */}
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem
            key={item.product.prdid}
            product={item.product}
            quantity={item.quantity}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>

      {/* Resumen de costos */}
      <div className="mt-6 space-y-6 border-t pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-lg font-medium text-center sm:text-left">
            Costo de envío
          </h2>
          <p className="text-gray-500 text-center sm:text-right">
            El valor del transporte depende de las tarifas del transportista.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-lg font-medium text-center sm:text-left">Total</h2>
          <Currency value={total} />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
