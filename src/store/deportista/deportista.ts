import {
  CreateDeportista,
  Deportista,
} from "@/interface/deportista/deportista.interface";
import {
  ConsultarDeportistas,
  CreateDeportistas,
} from "@/services/deportista/deportista.service";
import { create } from "zustand";
// import { VerificareExisteDeportista, ConsultarDeportistas } from '../../services/deportista/deportista.service';

interface DeportistaProp {
  deportistas: Deportista[];
  deportistaConsulta: Deportista | null;
  // deportistaExiste: boolean;
  ConsultarDeportista: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
  crear_deportista: (data: CreateDeportista) => Promise<void>;
  // verificarDeportista: (numero_documento: string) => Promise<boolean>;
}

export const useDeportistaStore = create<DeportistaProp>((set) => ({
  deportistas: [],
  deportistaConsulta: null,
  // deportistaExiste: false,

  ConsultarDeportista: async () => {
    try {
      const response = await ConsultarDeportistas();
      const consultar: Deportista[] = response.data;
      set({deportistas:consultar}); // Asegurarse de que persona recibe un array válido
    } catch (error) {
      console.error("Error al consultar deportista:", error);
    }
  },

 

  crear_deportista: async (data: CreateDeportista) => {
    try {
      const response = await CreateDeportistas(data);
      console.log("Deportista creado:", response.data);
      const newResponse = await ConsultarDeportistas();
      set({ deportistas: newResponse.data }); // Actualiza la lista de deportistas después de crear uno nuevo
    } catch (error) {
      console.error("Error al crear deportista:", error);
    }
  },

}));
