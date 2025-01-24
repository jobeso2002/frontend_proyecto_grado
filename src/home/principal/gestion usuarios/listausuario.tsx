
function UserList() {
    // Datos de usuarios
    const users = [
      {
        idUsuario: "1002",
        username:"jose",
        correo: "Admin@gmail.com",
        password: "123456",
        
      },
      {
          idUsuario: "1002",
          username:"jose",
          correo: "Admin@gmail.com",
          password: "123456",
      },
      {
          idUsuario: "1002",
          username:"jose",
          correo: "Admin@gmail.com",
          password: "123456",
      },
    ];
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Listado Usuarios</h1>
        <a
          href="/crear-usuario"
          className="text-blue-500 underline mb-4 inline-block"
        >
          Crear Nuevo
        </a>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
          <thead>
            <tr>
              {[
                "IdUsuario",
                "username",
                "correo",
                "Password",
                
                "",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-2 text-left font-semibold text-gray-700 border-b"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-2 border-b">{user.idUsuario}</td>
                <td className="px-4 py-2 border-b">{user.username}</td>
                <td className="px-4 py-2 border-b">{user.correo}</td>
                <td className="px-4 py-2 border-b">{user.password}</td>
               
                <td className="px-4 py-2 border-b flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300">
                    ✏️
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UserList;
  