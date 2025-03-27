import { useEffect, useState } from "react";
import { useUserStore } from "@/store/usuario/user";
import { Link } from "react-router-dom";
import { Persona } from "@/interface/user/user.interface";

function ListaUsuarios() {
  const { persona,  consultarUsuario, eliminar_persona, actualizar_persona } =
    useUserStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    consultarUsuario();
  }, [ consultarUsuario]);

  const handleDelete = async (id: number) => {
    if (confirm("¿Estás seguro de eliminar este usuario?")) {
      await eliminar_persona(id);
    }
  };

  const handleEdit = (id: number) => {
    const nuevonombre = prompt("Ingresa el nuevo nombre del usuario");
    if (nuevonombre) {
      actualizar_persona(id, { primer_nombre: nuevonombre });
    }
  };

<<<<<<< HEAD
  // Filtrar usuarios por nombre
  const filteredUsers = persona.filter((user:Persona) =>
=======
  const filteredUsers = persona.filter((user: Persona) =>
>>>>>>> 47d1fd0 (error para registrar usuario problema en el axios me deja registrar deportista si elimino la conf en el axio puedo reg usuario)
    user.primer_nombre.toLowerCase().includes(search.toLowerCase())
  );

  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Listado de Usuarios</h1>

      <Link to="/registrar" className="text-blue-500 underline mb-4 inline-block">
        Crear Nuevo Usuario
      </Link>

      {/* Input para filtrar */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
        <thead>
          <tr>
            {["ID", "Nombre", "Correo", "ID Rol", "Acciones"].map((header) => (
              <th key={header} className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {filteredUsers.map((user:Persona) => (
=======
          {filteredUsers.map((user: Persona) => (
>>>>>>> 47d1fd0 (error para registrar usuario problema en el axios me deja registrar deportista si elimino la conf en el axio puedo reg usuario)
            <tr key={user.id} className="hover:bg-gray-50 transition duration-200">
              <td className="px-4 py-2 border-b">{user.id}</td>
              <td className="px-4 py-2 border-b">{user.primer_nombre}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b">{user.id_rol}</td>
              <td className="px-4 py-2 border-b flex gap-2">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
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

export default ListaUsuarios;
