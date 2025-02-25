export interface Persona {
  id: number;
  tipo_documento: string;
  numero_documento: string;
  fecha_exp_doc: string;
  lugar_exp_doc: string;
  fecha_nacimiento: string;
  primer_nombre: string;
  segundo_nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  sexo: string;
  tipo_sangre: string;
  edad: number;
  nacionalidad: string;
  telefono: string;
  email: string;
  password: string;
  id_rol: number;
}

export type SingIn = Pick<Persona, "email" | "password">;
export type Register = Omit<Persona, "id">;

