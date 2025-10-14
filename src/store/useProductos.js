// src/store/useProductos.js
import { create } from "zustand";

const KEY_PRODUCTOS = "productos";

const productosBase = [
];

const loadProductos = () => {
  const raw = localStorage.getItem(KEY_PRODUCTOS);
  if (!raw) {
    localStorage.setItem(KEY_PRODUCTOS, JSON.stringify(productosBase));
    return productosBase;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return productosBase;
  }
};

export const useProductos = create((set, get) => ({
  productos: loadProductos(),

  agregarProducto: (nuevo) => {
    const productos = [...get().productos, nuevo];
    localStorage.setItem(KEY_PRODUCTOS, JSON.stringify(productos));
    set({ productos });
  },

  eliminarProducto: (id) => {
    const productos = get().productos.filter((p) => p.id !== id);
    localStorage.setItem(KEY_PRODUCTOS, JSON.stringify(productos));
    set({ productos });
  },

  actualizarProducto: (id, cambios) => {
    const productos = get().productos.map((p) =>
      p.id === id ? { ...p, ...cambios } : p
    );
    localStorage.setItem(KEY_PRODUCTOS, JSON.stringify(productos));
    set({ productos });
  },
}));
