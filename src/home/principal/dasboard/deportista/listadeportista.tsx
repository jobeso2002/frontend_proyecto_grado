import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Deportista } from "@/interface/deportista/deportista.interface";
import { useDeportistaStore } from "@/store/deportista/deportista";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/usuario/user";
import { Persona } from "@/interface/user/user.interface";

// Interface para el tipo combinado
interface DeportistaCompleto extends Persona, Deportista {
  id_deportista: number | null;
}

function ListaDeportista() {
  const { deportistas, ConsultarDeportista: cargarDeportistas } = useDeportistaStore();
  const { persona, consultarUsuario } = useUserStore();
  const [busqueda, setBusqueda] = useState("");
  const [deportistasCompletos, setDeportistasCompletos] = useState<DeportistaCompleto[]>([]);
  const [loading, setLoading] = useState(true);

  // Cargar datos iniciales
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await Promise.all([cargarDeportistas(), consultarUsuario()]);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [cargarDeportistas, consultarUsuario]);

  // Combinar datos cuando ambos arrays estén disponibles
  useEffect(() => {
    if (deportistas.length > 0 && persona.length > 0) {
      console.log("Depurando combinación:");
      console.log("Total deportistas:", deportistas.length);
      console.log("Total personas:", persona.length);
      
      const combinados = persona.reduce((acc: DeportistaCompleto[], persona) => {
        const deportistaData = deportistas.find(d => d.id_persona === persona.id);
        
        if (deportistaData) {
          console.log(`Combinando: Persona ID ${persona.id} con Deportista ID ${deportistaData.id}`);
          acc.push({
            ...persona,
            ...deportistaData,
            id_deportista: deportistaData.id,
          });
        } else {
          console.log(`No se encontró deportista para persona ID ${persona.id}`);
        }
        
        return acc;
      }, []);
      
      console.log("Total combinados:", combinados.length);
      setDeportistasCompletos(combinados);
    } else {
      console.log("No hay suficientes datos para combinar");
    }
  }, [deportistas, persona]);

  const deportistasFiltrados = deportistasCompletos.filter((deportista) => {
    const term = busqueda.toLowerCase();
    return (
      deportista.primer_nombre?.toLowerCase().includes(term) ||
      deportista.primer_apellido?.toLowerCase().includes(term) ||
      deportista.numero_documento?.includes(term) ||
      deportista.email?.toLowerCase().includes(term)
    );
  });

  if (loading) {
    return <div className="p-6 text-center">Cargando datos...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Listado de Deportistas</h1>
      
      <div className="mb-6 flex justify-between items-center">
        <Input
          type="text"
          placeholder="Buscar por nombre, apellido, documento o email"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-1/2"
        />
        <Button className="bg-blue-600 hover:bg-blue-700">
          Exportar a Excel
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documento</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre Completo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datos Deportivos</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {deportistasFiltrados.map((deportista) => (
              <tr key={deportista.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {deportista.tipo_documento}
                  </div>
                  <div className="text-sm text-gray-500">
                    {deportista.numero_documento}
                  </div>
                  <div className="text-xs text-gray-400">
                    Exp: {deportista.lugar_exp_doc} - {deportista.fecha_exp_doc}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {deportista.primer_nombre} {deportista.segundo_nombre}
                  </div>
                  <div className="text-sm text-gray-900">
                    {deportista.primer_apellido} {deportista.segundo_apellido}
                  </div>
                  <div className="text-xs text-gray-500">
                    {deportista.sexo} | {deportista.tipo_sangre}
                  </div>
                  <div className="text-xs text-gray-400">
                    Nac: {deportista.fecha_nacimiento} | {deportista.nacionalidad}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{deportista.edad} años</div>
                  <div className="text-sm text-gray-500">
                    {deportista.estatura} cm / {deportista.peso} kg
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{deportista.email}</div>
                  <div className="text-sm text-gray-500">{deportista.telefono}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Posición: {deportista.posicion}
                  </div>
                  <div className="text-sm text-gray-500">
                    Camisa: #{deportista.numero_camisa}
                  </div>
                  <div className="text-xs text-gray-500">
                    Estado: <span className={`font-semibold ${deportista.estado === 'Activo' ? 'text-green-600' : 'text-red-600'}`}>
                      {deportista.estado}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Club ID: {deportista.id_club}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    className="text-blue-600 hover:text-blue-900 mr-4"
                    onClick={() => console.log("Editar", deportista.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    // onClick={() => handleEliminar(deportista.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deportistasFiltrados.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          {deportistasCompletos.length === 0 ? "Cargando deportistas..." : "No se encontraron deportistas con ese criterio de búsqueda"}
        </div>
      )}
    </div>
  );
}

export default ListaDeportista;
