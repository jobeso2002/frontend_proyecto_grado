import { Contacto } from "@/interface/contactos/contacto.interface";
import { ConsultarContacto, CreatContacto } from "@/services/contactos/contactos.service";
import { create } from "zustand";

interface ContactoProp {
    contacto: Contacto[];
    Consultar: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
    crear_deportista: (data: Contacto) => Promise<void>;
}

export const useContactoStore = create<ContactoProp>((set) => ({
    contacto: [],
    Consultar: async () => {
        try {
            const response = await ConsultarContacto();
            const consultar: Contacto[] = response.data;
            set(() => ({ contacto: consultar })); // Asegurarse de que persona recibe un array válido
        } catch (error) {
            console.error("Error al consultar usuario:", error);
        }
    },
    crear_deportista: async (data: Contacto) => {
        try {
            await CreatContacto(data);
        } catch (error) {
            console.error("Error al crear usuario:", error);
        }
    },
}));