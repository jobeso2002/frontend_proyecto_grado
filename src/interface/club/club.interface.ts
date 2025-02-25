export interface Club {
    id: number;
    nombre_club: string;
    id_dir_tecnico: number[]; //en la base de datos la tengo como arreglo 
}

export type CreateClub = Omit<Club, "id">;
