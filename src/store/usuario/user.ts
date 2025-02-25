import { Persona, Register } from "@/interface/user/user.interface";
import { ConsultarUsuario, RegistrarUsuario } from "@/services/user/usuario.service";
import { create } from "zustand";

interface UserProp {
    persona: Persona[];
    Consultar: () => Promise<void>; // Consultar ahora devuelve una Promesa<void>
    crear_persona: (data: Register) => Promise<void>;
}
 
export const useUserStore = create<UserProp>((set) => ({
     persona: [],
     Consultar: async () => {
         try {
            const response = await ConsultarUsuario();
            const consultar: Persona[] = response.data;
            set(() => ({ persona: consultar })); // Asegurarse de que persona recibe un array válido
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
 }));

 
