import { Api } from "@/config/axios_base.config";
import { CreateClub } from '../../interface/club/club.interface';



export const CreatClub = (data: CreateClub) => {
    return Api.post("/clubes", data);
};
  
export const ConsultarClub = () => {
  return Api.get("/clubes");
};
