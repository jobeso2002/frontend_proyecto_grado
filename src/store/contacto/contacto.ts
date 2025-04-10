import { Contacto, CreateContacto } from "@/interface/contactos/contacto.interface";
import { ConsultarContacto, CreatContacto } from "@/services/contactos/contactos.service";
import { create } from "zustand";

interface ContactoProp {
    contacto: Contacto[];
    Consultar: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
    crear_contacto: (data: Contacto) => Promise<void>;
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
    // En tu store de contacto
crear_contacto: async (data: CreateContacto) => {
    try {
        await CreatContacto(data);
        console.log("Contacto creado:", data);
        // Opcional: actualizar la lista de contactos después de crear uno nuevo
        const newResponse = await ConsultarContacto();
        set({ contacto: newResponse.data });
    } catch (error) {
        console.error("Error al crear contacto:", error);
    }
},
}));