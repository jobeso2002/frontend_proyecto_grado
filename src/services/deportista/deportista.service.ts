import { Api } from "@/config/axios_base.config";
import { CreateDeportista } from "@/interface/deportista/deportista.interface";


export const CreateDeportistas = (data: CreateDeportista) => {
    return Api.post("/deportista", data);
};
  
export const ConsultarDeportistas = () => {
  return Api.get("/deportista");
};


