import { Club } from "@/interface/club/club.interface";
import { ConsultarClub, CreatClub } from "@/services/club/club.service";
import { create } from "zustand";

interface ClubProp {
    club: Club[];
    Consultar: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
    crear_deportista: (data: Club) => Promise<void>;
}

export const useClubStore = create<ClubProp>((set) => ({
    club: [],
    Consultar: async () => {
        try {
            const response = await ConsultarClub();
            const consultar: Club[] = response.data;
            set(() => ({ club: consultar })); // Asegurarse de que persona recibe un array válido
        } catch (error) {
            console.error("Error al consultar usuario:", error);
        }
    },
    crear_deportista: async (data: Club) => {
        try {
            await CreatClub(data);
        } catch (error) {
            console.error("Error al crear usuario:", error);
        }
    },
}));