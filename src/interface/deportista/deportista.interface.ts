export interface Deportista {
    id: number;  
    posicion: string;
    estado: string;
    numero_camisa: number;
    estatura: number;
    peso: number;
    id_club: number;
    id_persona: number;
}

export type CreateDeportista = Omit<Deportista, "id">;