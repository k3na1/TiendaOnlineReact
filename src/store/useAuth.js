// src/store/useAuth.js
import { create } from "zustand";
import { useUsuarios } from "./useUsuarios";

const KEY = "usuarioLogueado";

export const useAuth = create((set) => ({
  usuario: JSON.parse(localStorage.getItem(KEY)) || null,

  login: (correo, password) => {
    const usuarios = useUsuarios.getState().usuarios;
    const user = usuarios.find(
      (u) => u.correo === correo && u.password === password
    );

    if (!user) return { success: false, message: "Credenciales inválidas" };

    localStorage.setItem(KEY, JSON.stringify(user));
    set({ usuario: user });
    return { success: true, user };
  },

  logout: () => {
    localStorage.removeItem(KEY);
    set({ usuario: null });
  },
}));
