import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/home/principal/login/login";
import Registrar from "@/home/principal/registrar/registrar";
import Inicio from "@/home/principal/banner_inicio/inicio";
import Dasboard from "@/home/principal/dasboard/dasboard";
import Layout from "@/layout"; // Asegúrate de importar Layout
import Nosotros from "@/home/principal/nosotros/nosotros";
import RegDeportista from "@/home/principal/dasboard/deportista/regdeportista";
import ListaDeportista from "@/home/principal/dasboard/deportista/listadeportista";
import ContactoFamiliarDep from "@/home/principal/dasboard/deportista/contactofamiliardep";
import Soporte from "@/home/principal/dasboard/deportista/soporte";
import Club from "@/home/principal/dasboard/club/club";
import { useAuthStore } from "@/store/authstore";
import { RutePrivate, RutePrublic } from "./private/route";
import { RoleType } from "@/enums/roles/role";
import TransferenciaJugador from '../home/principal/dasboard/club/transferencia';

import RegistrarEvento from "@/home/principal/dasboard/eventos/registrarevento";
import ListarEventos from "@/home/principal/dasboard/eventos/listarevento";
import ListaClub from "@/home/principal/dasboard/club/listaclub";

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
          <Route path="/transferencia" element={<TransferenciaJugador/>} />
          <Route path="/listaclube" element={<ListaClub/>} />
          <Route path="/regevento" element={<RegistrarEvento/>} />
          <Route path="/listaevento" element={<ListarEventos/>} />
        </Route>
      </Routes>
    </Router>
  );
};
