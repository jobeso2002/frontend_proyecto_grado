import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./home/login";
import Registrar from "./home/registrar";
import Inicio from "./home/inicio";
import Dasboard from "./home/dasboard";
import ProtectedRoute from "./protecteRoute";
import { AuthProvider } from "./auth/authprovider";
import Layout from "./layout"; // Asegúrate de importar Layout

import Nosotros from "./home/nosotros";
import RegDeportista from "./home/principal/deportista/regdeportista";
import ListaDeportista from "./home/principal/deportista/listadeportista";
import ContactoFamiliarDep from "./home/principal/deportista/contactofamiliardep";
import Soporte from "./home/principal/deportista/soporte";
import Club from "./home/principal/deportista/club";


function App() {
  return (
    <Router>
    <AuthProvider>
      
        <Routes>
          {/* Las rutas dentro de Layout*/}
          <Route element={<Layout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Route>

          {/* Ruta protegida */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dasboard" element={<Dasboard />} />
            <Route path="/regdeportista" element={<RegDeportista />} />
            <Route path="/listadeportista" element={<ListaDeportista />} />
            <Route path="/conctatofamiliardeportista" element={<ContactoFamiliarDep />} />
            <Route path="/soporte" element={<Soporte />} />
            <Route path="/club" element={<Club />} />
          </Route>
        </Routes>
      
    </AuthProvider>
    </Router>
  );
}

export default App;
