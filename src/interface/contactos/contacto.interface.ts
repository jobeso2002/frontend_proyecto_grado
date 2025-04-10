export interface Contacto {
    id: number;
    parentesco: string;
    direccion_residencia: string;
    barrio: string;
    deportistaId: number;
}

export type CreateContacto = Omit<Contacto, "id">;