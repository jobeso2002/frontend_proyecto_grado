import { CreateDeportista, Deportista } from "@/interface/deportista/deportista.interface";
import { ConsultarDeportistas, CreateDeportistas } from "@/services/deportista/deportista.service";
import { create } from "zustand";

interface DeportistaProp {
    deportista: Deportista[];
    Consultar: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
    crear_deportista: (data: CreateDeportista) => Promise<void>;
}

export const useDeportistaStore = create<DeportistaProp>((set) => ({
    deportista: [],
    Consultar: async () => {
        try {
            const response = await ConsultarDeportistas();
            const consultar: Deportista[] = response.data;
            set(() => ({ deportista: consultar })); // Asegurarse de que persona recibe un array válido
        } catch (error) {
            console.error("Error al consultar deportista:", error);
        }
    },
    crear_deportista: async (data: CreateDeportista) => {
        try {
            await CreateDeportistas(data);
        } catch (error) {
            console.error("Error al crear deportista:", error);
        }
    },
}));
 