import { Persona, Register } from "@/interface/user/user.interface";
import {
  ActualizarUsuario,
  ConsultarUsuario,
  EliminarUsuario,
  RegistrarUsuario,
} from "@/services/user/usuario.service";
import { create } from "zustand";

interface UserProp {
  persona: Persona[];
  Consultar_persona: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
  crear_persona: (data: Register) => Promise<void>;
  eliminar_persona: (id: number) => Promise<void>;
  actualizar_persona: (id: number, data: Partial<Register>) => Promise<void>;
}

export const useUserStore = create<UserProp>((set) => ({  
  persona: [],

  Consultar_persona: async () => {
    try {
      const response = await ConsultarUsuario();
      const consultar_persona: Persona[] = response.data;
      set(() => ({ persona: consultar_persona })); // Asegurarse de que persona recibe un array válido
    } catch (error) {
      console.error("Error al consultar usuario:", error);
    }
  },

  crear_persona: async (data: Register) => {
    try {
      const token = localStorage.getItem("token"); // Obtener token del admin

      if (!token) {
        throw new Error("No tienes permiso para registrar usuarios.");
      }

      await RegistrarUsuario(data);
      console.log("Usuario registrado exitosamente");
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  },

  eliminar_persona: async (id: number) => {
    try {
      const token = localStorage.getItem("token"); // Obtener token del admin

      if (!token) {
        throw new Error("No tienes permiso para eliminar usuarios.");
      }

      await EliminarUsuario(id);
      set((state) => ({
        persona: state.persona.filter((user) => user.id !== id),
      }));
      console.log("Usuario eliminado exitosamente");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  },

  actualizar_persona: async (id: number, data: Partial<Register>) => {
    try {
      const token = localStorage.getItem("token"); // Obtener token del admin

      if (!token) {
        throw new Error("No tienes permiso para actualizar usuarios.");
      }

      await ActualizarUsuario(id, data);
      set((state) => ({
        persona: state.persona.map((user) => {
          if (user.id === id) {
            return { ...user, ...data };
          }
          return user;
        }),
      }));
      console.log("Usuario actualizado exitosamente");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
   
  },
}));

