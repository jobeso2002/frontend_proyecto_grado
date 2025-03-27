import {
  CreateDeportista,
  Deportista,
} from "@/interface/deportista/deportista.interface";
import {
  ConsultarDeportistas,
  CreateDeportistas,
} from "@/services/deportista/deportista.service";
import { create } from "zustand";
// import { VerificareExisteDeportista } from '../../services/deportista/deportista.service';

interface DeportistaProp {
  deportista: Deportista | null;
  // deportistaExiste: boolean;
  Consultar: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
  crear_deportista: (data: CreateDeportista) => Promise<void>;
  // verificarDeportista: (numero_documento: string) => Promise<boolean>;
}

export const useDeportistaStore = create<DeportistaProp>((set) => ({
  deportista: null,
  // deportistaExiste: false,

  Consultar: async () => {
    try {
      const response = await ConsultarDeportistas();
      const consultar: Deportista[] = response.data;
      set(() => ({ deportista: consultar[0] || null })); // Asegurarse de que persona recibe un array válido
    } catch (error) {
      console.error("Error al consultar deportista:", error);
    }
  },

  crear_deportista: async (data: CreateDeportista) => {
    try {
      const response = await CreateDeportistas(data);
      console.log("Deportista creado:", response.data);
    } catch (error) {
      console.error("Error al crear deportista:", error);
    }
  },

  // verificarDeportista: async (numero_documento: string) => {
  //   try {
  //     const response = await VerificareExisteDeportista(numero_documento);
  //     set({ deportistaExiste: response.data.existe });
  //     return response.data.existe;
  //   } catch (error) {
  //     console.error("Error al verificar deportista:", error);
  //     set({ deportistaExiste: false });
  //     return false;
  //   }
  // },



}));
