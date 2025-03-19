import { Club, CreateClub } from "@/interface/club/club.interface";
import { ConsultarClub, CreatClub } from "@/services/club/club.service";
import { create } from "zustand";

interface ClubProp {
    club: Club[];
    ConsultarClub: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
    crear_Club: (data: CreateClub) => Promise<void>;
}

export const useClubStore = create<ClubProp>((set) => ({
    club: [],
    ConsultarClub: async () => {
        try {
            const response = await ConsultarClub();
            const consultar: Club[] = response.data;
            set(() => ({ club: consultar })); // Asegurarse de que persona recibe un array válido
        } catch (error) {
            console.error("Error al consultar usuario:", error);
        }
    },
    crear_Club: async (data: CreateClub) => {
        try {
            await CreatClub(data);
        } catch (error) {
            console.error("Error al crear usuario:", error);
        }
    },
}));