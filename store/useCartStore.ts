import { create } from 'zustand';
import { Producto } from '@/types';

interface CartItem {
  product: Producto;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number; // Nueva propiedad derivada
  addToCart: (product: Producto, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

// Función para sincronizar con localStorage
const persistCart = (items: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(items));
};

const loadCart = (): CartItem[] => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const useCartStore = create<CartState>((set, get) => ({
  items: loadCart(),

  // Nueva propiedad derivada para la cantidad total
  get totalQuantity() {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.product.prdid === product.prdid);

      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.product.prdid === product.prdid
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...state.items, { product, quantity }];

      persistCart(updatedItems);
      return { items: updatedItems };
    });
  },

  removeFromCart: (id) => {
    set((state) => {
      const updatedItems = state.items.filter((item) => item.product.prdid !== id);
      persistCart(updatedItems);
      return { items: updatedItems };
    });
  },

  updateQuantity: (id, quantity) => {
    if (quantity <= 0) return;

    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.product.prdid === id ? { ...item, quantity } : item
      );

      persistCart(updatedItems);
      return { items: updatedItems };
    });
  },

  clearCart: () => {
    set(() => {
      persistCart([]);
      return { items: [] };
    });
  },
}));

export default useCartStore;
