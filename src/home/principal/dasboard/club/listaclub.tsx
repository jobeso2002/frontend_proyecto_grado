function ListaClub() {
  const jugadores = [
    {
     
      Nit_club: "1087567234",
      
      fecha_creacion: "2023-01-10",
     
      Nombre_club: "rompe olas",
      
    },
    {
      Nit_club: "108756534",
      
      fecha_creacion: "2022-02-10",
     
      Nombre_club: "ganadores",
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Lista de club - TOTAL {jugadores.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Nit del club.</th>
              <th className="border border-gray-300 px-3 py-2">F. creacion </th>
              <th className="border border-gray-300 px-3 py-2"> Nombre club</th>
              
            </tr>
          </thead>
          <tbody>
            {jugadores.map((jugador, index) => (
              <tr
                key={index}
                className="text-center odd:bg-white even:bg-gray-100"
              >
            
                <td className="border border-gray-300 px-3 py-2">{jugador.Nit_club}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.fecha_creacion}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.Nombre_club}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 block mx-auto"
      >
        + Nuevo CLub
      </button>
    </div>
  );
}

export default ListaClub;
