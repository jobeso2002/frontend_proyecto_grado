import { create } from "zustand";
import { decryptData, encryptData } from "./decrypt/decryptData";
import { SingInService } from "@/services/auth/authservicies";
import { jwtDecode } from 'jwt-decode';

interface AuthState {
  user: { email: string; role: string; name: string } | null;
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  initializeAuth: () => void; // Función para inicializar la autenticación al cargar la app
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  error: null,
  isAuthenticated: false,
  loading: true, // Estado inicial de loading
  // Función para restaurar la sesión desde localStorage
  initializeAuth: () => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      // Activar el loading al iniciar la solicitud
      try {
       
        // Desencriptar los datos
        const decryptedToken = decryptData(storedToken);
        console.log(decryptedToken)
        const decryptedUser = decryptData(storedUser);

        set({
          user: {
            email: decryptedUser.email,
            role: decryptedUser.role,
            name: decryptedUser.name,
          },
          token: decryptedToken,
          isAuthenticated: true,
          error: null,
          loading: false, // Desactivar el loading al finalizar
        });
      } catch (error) {
        console.error("Error al desencriptar los datos:", error);
      }
    } // Desactivar el loading al finalizar
  },

  // Función de inicio de sesión
  login: async (data) => {
    try {
      const response = await SingInService(data); // Llamar al servicio de autenticación
      const token = response.token; // Obtener el token desde la respuesta
      console.log(response)
      const decoded = jwtDecode<{
        email: string;
        sub: string;
        role: string;
      }>(token); // Decodificar el token

      // Encriptar y guardar token e información del usuario en localStorage
      localStorage.setItem("token", encryptData(token));
      localStorage.setItem("user", encryptData(decoded));

      set({
        user: { email: decoded.email, name: decoded.sub, role: decoded.role },
        token,
        isAuthenticated: true,
        error: null,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Error en la autenticación",
        isAuthenticated: false,
      });
    } finally {
      set({ loading: false }); // Desactivar el loading al finalizar
    }
  },

  // Función de cierre de sesión
  logout: () => {
    // Eliminar datos de localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Resetear el estado de la autenticación
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
      loading: false, // Desactivar el loading al finalizar
    });
  },
}));
