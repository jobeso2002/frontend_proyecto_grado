import { Api } from "@/config/axios_base.config";
import { CreateContacto } from "@/interface/contactos/contacto.interface";



export const CreatContacto = (data: CreateContacto) => {
    return Api.post("/contacto", data);
};
  
export const ConsultarContacto = () => {
  return Api.get("/contacto");
};
