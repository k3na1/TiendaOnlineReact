// src/store/useCarrito.js
import { create } from "zustand";

const KEY = "carrito";

const load = () => {
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const useCarrito = create((set, get) => ({
  items: load(),

  agregar: (producto, cantidad = 1) => {
    const items = [...get().items];
    const existente = items.find((i) => i.id === producto.id);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      items.push({ ...producto, cantidad });
    }

    localStorage.setItem(KEY, JSON.stringify(items));
    set({ items });
  },

  actualizar: (id, cantidad) => {
    const items = get().items.map((i) =>
      i.id === id
        ? { ...i, cantidad: Math.max(1, Math.min(cantidad, i.stock || 99)) }
        : i
    );
    localStorage.setItem(KEY, JSON.stringify(items));
    set({ items });
  },

  eliminar: (id) => {
    const items = get().items.filter((i) => i.id !== id);
    localStorage.setItem(KEY, JSON.stringify(items));
    set({ items });
  },

  vaciar: () => {
    localStorage.removeItem(KEY);
    set({ items: [] });
  },
}));
