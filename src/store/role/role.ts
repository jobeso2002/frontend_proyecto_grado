import { Roles } from '@/interface/roles/role.interface';
import { ConsultarRoles } from '@/services/roles/roles.service';
import {create} from 'zustand';

interface RoleProps {
    role: Roles[];
    ConsultRole: () => Promise<void>;
}

export const RolesStore = create<RoleProps>((set) => ({
     role: [],
     ConsultRole: async () => {
         try {
            const response = await ConsultarRoles();
            const consultar: Roles[] = response.data;
            set(() => ({ role: consultar })); // Asegurarse de que persona recibe un array válido
         } catch (error) {
             console.error("Error al consultar usuario:", error);
         }
     },
        
 }));