import { create } from 'zustand';
import { Producto } from '@/types';

interface CartItem {
  product: Producto;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Producto, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  
  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.product.prdid === product.prdid);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.prdid === product.prdid
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return { items: [...state.items, { product, quantity }] };
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.product.prdid !== id),
    }));
  },

  updateQuantity: (id, quantity) => {
    // Validar cantidad mínima
    if (quantity <= 0) return;

    set((state) => ({
      items: state.items.map((item) =>
        item.product.prdid === id ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },
}));

export default useCartStore;
