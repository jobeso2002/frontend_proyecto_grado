import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Deportista } from "@/interface/deportista/deportista.interface";
import { useDeportistaStore } from "@/store/deportista/deportista";
import { useEffect, useState } from "react";



function ListaDeportista() {
  const {deportistas, ConsultarDeportista} = useDeportistaStore()
  const [search, setSearch] = useState("");

  useEffect(() => {
      ConsultarDeportista();
    }, [ ConsultarDeportista]);

    // Filtrar usuarios por nombre
      const filteredUsers = deportistas.filter((deportista:Deportista) =>
        deportista.posicion.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Listado de Deportistas</h1>
      
      <div className="mb-6 flex justify-between items-center">
        {/* Input para filtrar */}
        <Input
          type="text"
          placeholder="Buscar por posicion, nombre, apellido, documento o email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2"
        />
        <Button className="bg-blue-600 hover:bg-blue-700">
          Exportar a Excel
        </Button>
      </div>

<table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
        <thead>
          <tr>
            {["ID", "Posicion", "Estado", "Estatura", "Peso", "numero_camisa", "clubId", "PersonaId", "Acciones"].map((header) => (
              <th key={header} className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>

          {filteredUsers.map((deportita: Deportista) => (
            <tr key={deportita.id} className="hover:bg-gray-50 transition duration-200">
              <td className="px-4 py-2 border-b">{deportita.id}</td>
              <td className="px-4 py-2 border-b">{deportita.posicion}</td>
              <td className="px-4 py-2 border-b">{deportita.estado}</td>
              <td className="px-4 py-2 border-b">{deportita.estatura}</td>
              <td className="px-4 py-2 border-b">{deportita.peso}</td>
              <td className="px-4 py-2 border-b">{deportita.numero_camisa}</td>
              <td className="px-4 py-2 border-b">{deportita.id_club}</td>
              <td className="px-4 py-2 border-b">{deportita.id_persona}</td>
              
              <td className="px-4 py-2 border-b flex gap-2">
                <button
                  
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                >
                  ✏️
                </button>
                <button
                  
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
    </div>
  );
}

export default ListaDeportista;
