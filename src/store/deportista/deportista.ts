import {
  CreateDeportista,
  Deportista,
} from "@/interface/deportista/deportista.interface";
import {
  ConsultarDeportistas,
  CreateDeportistas,
} from "@/services/deportista/deportista.service";
import { create } from "zustand";

interface DeportistaProp {
  deportista: Deportista | null;
  Consultar: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
  crear_deportista: (data: CreateDeportista) => Promise<void>;
}

export const useDeportistaStore = create<DeportistaProp>((set) => ({
  deportista: null,
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
}));
