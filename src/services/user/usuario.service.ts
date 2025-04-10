import { Register } from "@/interface/user/user.interface";
import { Api } from "../../config/axios_base.config";

export const RegistrarUsuario = (data: Register) => {
  return Api.post("/persona", data);
};

export const ConsultarUsuario = () => {
  return Api.get("/persona");
};

export const ConsultarUsuarioId = (numero_documento: string) => {
  return Api.get(`/persona/buscar/${numero_documento}`);
};

export const EliminarUsuario = (id: number) => {
  return Api.delete(`/persona/${id}`);
};

export const ActualizarUsuario = (id: number, data: Partial<Register>) => {
  return Api.patch(`/persona/${id}`, data);
};

