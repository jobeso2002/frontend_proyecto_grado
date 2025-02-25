import { Api } from "@/config/axios_base.config";
import { Persona, SingIn } from "@/interface/user/user.interface";

interface AuthResponse {
  token: string;
  user: Persona;
  roles: string[];
}

// Servicio para iniciar sesión
export const SingInService = async (data: SingIn) => {
  const response = await Api.post<AuthResponse>("/auth/login", data);
  return response.data;
};


