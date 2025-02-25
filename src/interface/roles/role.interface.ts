export interface Roles {
    id: number;
    name: string;
}

export type CreateRole = Omit<Roles, "id">;
