import { useEffect } from "react";
import { RoutesIndex } from "./routes/route";
import { useAuthStore } from "./store/authstore";



function App() {
  
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    initializeAuth(); // Restaurar autenticación desde localStorage al cargar la página
  }, [initializeAuth]);
  
  
  return (
    <>
      <RoutesIndex />
    </>
  );
}

export default App;
