// AuthContext.tsx
import { createContext, useState, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;  // ✅ Ahora acepta el token
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem("token");  // ✅ Mantiene sesión si ya hay token
  });

  const navigate = useNavigate();

  const login = (token: string) => {
    setIsAuthenticated(true);
    localStorage.setItem("token", token);  // ✅ Guarda el token recibido
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext);


