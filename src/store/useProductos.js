// src/store/useProductos.js
import { create } from "zustand";

const KEY_PRODUCTOS = "productos";

// --- Productos base (incluye uno de prueba) ---
const productosBase = [
  {
    id: "SKU999",
    nombre: "Café Experimental Deluxe ☕",
    descripcion:
      "Un café creado solo para pruebas de integración con React y carrito.",
    precio: 15000,
    stock: 5,
    imagen: "https://via.placeholder.com/300x300.png?text=Cafe+Experimental",
  },
  {
    id: "SKU001",
    nombre: "Café de Grano Clásico",
    descripcion: "Equilibrado y suave, perfecto para comenzar el día.",
    precio: 12000,
    stock: 10,
    imagen: "https://via.placeholder.com/300x300.png?text=Cafe+Clasico",
  },
];

// --- Carga desde localStorage o crea base si no existe ---
const loadProductos = () => {
  const raw = localStorage.getItem(KEY_PRODUCTOS);
  if (!raw) {
    localStorage.setItem(KEY_PRODUCTOS, JSON.stringify(productosBase));
    return [...productosBase];
  }
  try {
    return JSON.parse(raw);
  } catch {
    return [...productosBase];
  }
};

// --- Store Zustand ---
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
