// src/store/useUsuarios.js
import { create } from "zustand";

const KEY = "usuarios";

const usuariosBase = [
  {
    run: "19011022K",
    nombre: "Juan",
    apellidos: "Pérez",
    correo: "admin@duoc.cl",
    tipo: "Administrador",
    password: "1234",
  },
  {
    run: "20011033L",
    nombre: "María",
    apellidos: "González",
    correo: "vendedor@gmail.com",
    tipo: "Vendedor",
    password: "1234",
  },
  {
    run: "21022044M",
    nombre: "Carlos",
    apellidos: "Ramírez",
    correo: "cliente@gmail.com",
    tipo: "Cliente",
    password: "1234",
  },
];

const loadUsuarios = () => {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(usuariosBase));
    return [...usuariosBase];
  }
  return JSON.parse(raw);
};

export const useUsuarios = create((set, get) => ({
  usuarios: loadUsuarios(),

  agregarUsuario: (nuevo) => {
    const usuarios = [...get().usuarios, nuevo];
    localStorage.setItem(KEY, JSON.stringify(usuarios));
    set({ usuarios });
  },

  eliminarUsuario: (run) => {
    const usuarios = get().usuarios.filter((u) => u.run !== run);
    localStorage.setItem(KEY, JSON.stringify(usuarios));
    set({ usuarios });
  },

  actualizarUsuario: (run, cambios) => {
    const usuarios = get().usuarios.map((u) =>
      u.run === run ? { ...u, ...cambios } : u
    );
    localStorage.setItem(KEY, JSON.stringify(usuarios));
    set({ usuarios });
  },
}));
