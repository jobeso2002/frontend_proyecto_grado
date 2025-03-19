import { Persona, Register } from "@/interface/user/user.interface";
import {
  ActualizarUsuario,
  ConsultarUsuario,
  ConsultarUsuarioId,
  EliminarUsuario,
  RegistrarUsuario,
} from "@/services/user/usuario.service";
import { create } from "zustand";



interface UserProp {
  persona: Persona | null;
  consultarUsuario: () => Promise<void>;
  ConsultarUsuarioId: (numero_documento: string) => Promise<void>; // Consultar ahora devuelve una Promesa<void>
  crear_persona: (data: Register) => Promise<void>;
  eliminar_persona: (id: number) => Promise<void>;
  actualizar_persona: (id: number, data: Partial<Register>) => Promise<void>;
}


export const useUserStore = create<UserProp>((set) => ({  
  persona: null,

  consultarUsuario: async () => {
    try {
      const response = await ConsultarUsuario();
      const personas_consultar: Persona[] = response.data;
      set(() => ({ persona: personas_consultar[0] || null })); // Asegurarse de que persona recibe un array válido
    } catch (error) {
      console.error("Error al consultar personas:", error);
    }
  },

  ConsultarUsuarioId: async (numero_documento:string) => {
    try {
      const response = await ConsultarUsuarioId(numero_documento);
      const consultar_persona: Persona = response.data;
      set(() => ({ persona: consultar_persona })); // Asegurarse de que persona recibe un array válido
    } catch (error) {
      console.error("Error al consultar usuario:", error);
    }
  },

  crear_persona: async (data: Register) => {
    try {
      
      await RegistrarUsuario(data);
      console.log("Usuario registrado exitosamente");
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  },

  eliminar_persona: async (id: number) => {
    try {
    
      await EliminarUsuario(id);
      set((state) => ({
        persona: state.persona?.id === id ? null : state.persona, // Eliminar si coincide con el id
      }));
      console.log("Usuario eliminado exitosamente");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  },

  actualizar_persona: async (id: number, data: Partial<Register>) => {
    try {
      

      await ActualizarUsuario(id, data);
      set((state) => ({
        persona: state.persona?.id === id ? { ...state.persona, ...data } : state.persona, // Actualizar si coincide con el id
      }));
      console.log("Usuario actualizado exitosamente");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
   
  },
}));

