import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/home/login";
import Registrar from "@/home/registrar";
import Inicio from "@/home/inicio";
import Dasboard from "@/home/dasboard";
import Layout from "@/layout"; // Asegúrate de importar Layout
import Nosotros from "@/home/nosotros";
import RegDeportista from "@/home/principal/deportista/regdeportista";
import ListaDeportista from "@/home/principal/deportista/listadeportista";
import ContactoFamiliarDep from "@/home/principal/deportista/contactofamiliardep";
import Soporte from "@/home/principal/deportista/soporte";
import Club from "@/home/principal/deportista/club";
import { useAuthStore } from "@/store/authstore";
import { RutePrivate, RutePrublic } from "./private/route";
import { RoleType } from "@/enums/roles/role";

export const RoutesIndex = () => {
  const { isAuthenticated, user, loading } = useAuthStore();
  return (
    <Router>
      <Routes>
        {/* Las rutas dentro de Layout*/}
        <Route element={<Layout />}>
          {/*rutas publicas */}
          <Route element={<RutePrublic IsAuth={isAuthenticated} />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Route>
        </Route>
        
        {/* Ruta privadas */}
        <Route
          element={
            <RutePrivate
              IsAuth={isAuthenticated}
              loading={loading}
              role={user?.role !== null ? user?.role : undefined}
              allowedRoles={[RoleType.ADMIN]} // Define los roles que pueden acceder
            />
          }
        >
          <Route path="/dasboard" element={<Dasboard />} />
          <Route path="/regdeportista" element={<RegDeportista />} />
          <Route path="/listadeportista" element={<ListaDeportista />} />
          <Route
            path="/conctatofamiliardeportista"
            element={<ContactoFamiliarDep />}
          />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/club" element={<Club />} />
        </Route>
      </Routes>
    </Router>
  );
};
