import { Register } from "@/interface/user/user.interface";
import { Api } from "../../config/axios_base.config";


export const RegistrarUsuario = (data: Register) => {
    return Api.post("/persona", data)
};

export const ConsultarUsuario = () => {
    return Api.get("/persona")
};

