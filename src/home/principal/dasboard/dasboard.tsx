import { Link } from "react-router-dom";
import { useState } from "react";
import liga from "@/assets/nuevofondo.jpg"
import RegDeportista from "./deportista/regdeportista";
import ListaDeportista from "./deportista/listadeportista";
import ListaUsuarios from "./gestion usuarios/listausuario";
import ContactoFamiliarDep from "./deportista/contactofamiliardep";
import Soporte from "./deportista/soporte";
import Club from "./club/club";
import { useAuthStore } from "@/store/authstore";
import TransferenciaJugador from "./club/transferencia";
import ListaClubes from "./deportista/listadeportista";


function Dashboard() {
  
  const [deportistasMenuOpen, setDeportistasMenuOpen] = useState(false);
  const [usuariosMenuOpen, setUsuariosMenuOpen] = useState(false);
  const [LigaMenuOpen, setLigasMenuOpen] = useState(false);
  const [EventosMenuOpen, setEventosMenuOpen] = useState(false);
  const [ClubesMenuOpen, setClubesMenuOpen] = useState(false);

  const toggleDeportistasMenu = () => setDeportistasMenuOpen(!deportistasMenuOpen);
  const toggleUsuariosMenu = () => setUsuariosMenuOpen(!usuariosMenuOpen);
  const toggleLigas = () => setLigasMenuOpen(!LigaMenuOpen);
  const toggleEventos = () => setEventosMenuOpen(!EventosMenuOpen);
  const toggleClubes = () => setClubesMenuOpen(!ClubesMenuOpen);
  
  const [activeView, setActiveView] = useState("Dashboard");

  const { logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);



  const renderContent = () => {
    switch (activeView) {
      case "Dashboard":
        return (
          <div>
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p>Aquí irá el contenido principal del Dashboard.</p>
          </div>
        );
      case "RegistrarDeportista":
        return <RegDeportista />;
      case "ListaDeportista":
        return <ListaDeportista />;
        case "ListaUsuario":
          return <ListaUsuarios />;
        case "contactofamiliar":
          return <ContactoFamiliarDep/>
        case "soporte":
          return <Soporte/>
        case "club":
          return <Club/>
        case "transferencia":
            return <TransferenciaJugador/>
        case "ListaClubes":
              return <ListaClubes/>
      default:
        return (
          <div>
            <h1 className="text-xl font-bold">404</h1>
            <p>La vista seleccionada no existe.</p>
          </div>
        );
    }
  };
  

  return (
    <div className="flex min-h-screen flex-col">
      {/* Encabezado */}
      <header className="flex items-center justify-between bg-green-700 text-white px-4 py-3">
        {/* Nombre del usuario */}
        
        <h1 className="text-lg font-bold">Sistema Integral De Gestion Administrativa Y Deportiva</h1>

        

        {/* Ícono de usuario */}
        <div className="relative">
        <button
          className="flex items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3
            c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22
            .03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </button>

        {/* Menú desplegable */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <button
              onClick={logout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
      </header>

      <div className="flex flex-grow">
        {/* Menú lateral */}
        <aside className="w-64 bg-green-700 text-white flex flex-col">
          {/* Imagen y nombre */}
          <div className="p-4 flex flex-col items-center">
            <div className="rounded-full overflow-hidden w-50 h-150">
              <img src={liga} alt="Perfil" className="w-full h-full object-contain" />
            </div>

            <h6 className="mt-4 text-lg font-bold">
             {/* { user ? `${user.primer_nombre}` : "Usuario no autenticado" } */}
             no
            </h6>
          </div>

          {/* Opciones del menú */}
          <nav className="flex-grow">
            <ul className="space-y-2 px-4">
              <li>
                <button
                  onClick={() => setActiveView("Dashboard")}
                  className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left"
                >
                  <span className="ml-3">Inicio</span>
                </button>
              </li>
              <li>
                <div>
                  <button
                    onClick={toggleUsuariosMenu}
                    className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left"
                  >
                    <span className="ml-3">Gestión Usuarios</span>
                  </button>
                  {usuariosMenuOpen && (
                    <ul className="pl-6 space-y-2">
                      <li>
                        <button
                          onClick={() => setActiveView("ListaUsuario")}
                          className="block p-2 rounded hover:bg-green-800 w-full text-left"
                        >
                          Listar Usuarios
                        </button>
                      </li>
                      <li>
                        <Link
                          to="/administrador"
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          Administrador
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <div>
                  <button
                    onClick={toggleDeportistasMenu}
                    className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left"
                  >
                    <span className="ml-3">Deportistas</span>
                  </button>
                  {deportistasMenuOpen && (
                    <ul className="pl-6 space-y-2">
                      <li>
                        <button
                          onClick={() => setActiveView("RegistrarDeportista")}
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          Registrar Deportista
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveView("ListaDeportista")}
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          Lista de Deportistas
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveView("contactofamiliar")}
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          Datos De Contactos
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveView("soporte")}
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          Soportes
                        </button>
                      </li>
                      
                    </ul>
                  )}
                </div>
              </li>
              <li>

                <div>
                  <button onClick={toggleClubes}
                    className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left">
                    <span className="ml-3">Clubes </span>
                  </button>
                  {ClubesMenuOpen && (
                    <ul className="pl-6 space-y-2">
                      <li>
                        <button
                          onClick={() => setActiveView("club")}
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          Club
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setActiveView("ListaClubes")}
                          className="block p-2 rounded hover:bg-green-800">
                        Listar Clubes
                        </button>
                        
                      </li>
                      <li>
                        <button
                          onClick={()=> setActiveView("transferencia")}
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          Transferir Jugador
                        </button>
                      </li>
                    </ul>)}
                </div>

              <div>
                  <button
                    onClick={toggleLigas}
                    className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left"
                  >
                    <span className="ml-3">Ligas </span>
                  </button>
                  {LigaMenuOpen && (
                    <ul className="pl-6 space-y-2">
                      <li>
                        <Link
                          to="/regdeportista"
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          opcion1
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/listar-deportistas"
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          opcion2
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
              <div>
                  <button
                    onClick={toggleEventos}
                    className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left"
                  >
                    <span className="ml-3">Evento</span>
                  </button>
                  {EventosMenuOpen && (
                    <ul className="pl-6 space-y-2">
                      <li>
                        <Link
                          to="/regdeportista"
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          opcion1
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/listar-deportistas"
                          className="block p-2 rounded hover:bg-green-800"
                        >
                          opcion2
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </nav>

          {/* Pie de página */}
          <footer className="text-center py-4 bg-green-700 text-sm">
            &copy; {new Date().getFullYear()} - Liga de voleibol
          </footer>
        </aside>

        {/* Contenido principal */}
        <main className="flex-grow p-6 bg-gray-100">
        {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
