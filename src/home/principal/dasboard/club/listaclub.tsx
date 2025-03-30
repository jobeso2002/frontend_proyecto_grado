function ListaClub() {
  const jugadores = [
    {
      tipoDocumento: "T.I.",
      numeroDocumento: "1087567234",
      lugarExpedicion: "Bogotá",
      fechaExpedicion: "2023-01-10",
      fechaNacimiento: "2005-05-15",
      primerNombre: "Camila",
      segundoNombre: "Andrea",
      primerApellido: "Gomez",
      segundoApellido: "Perez",
      tipoSangre: "O+",
      genero: "Femenino",
      estatura: 165,
      peso: 55,
      direccion: "Calle 123",
      celular: "3001234567",
      email: "camila@example.com",
    },
    {
      tipoDocumento: "C.C.",
      numeroDocumento: "1087567235",
      lugarExpedicion: "Medellín",
      fechaExpedicion: "2022-05-12",
      fechaNacimiento: "1998-03-21",
      primerNombre: "Andres",
      segundoNombre: "Felipe",
      primerApellido: "Martinez",
      segundoApellido: "Gomez",
      tipoSangre: "A+",
      genero: "Masculino",
      estatura: 175,
      peso: 70,
      direccion: "Carrera 45",
      celular: "3109876543",
      email: "andres@example.com",
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Lista de jugadores - TOTAL {jugadores.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Tipo Doc.</th>
              <th className="border border-gray-300 px-3 py-2">Número Doc.</th>
              <th className="border border-gray-300 px-3 py-2">Lugar Exp.</th>
              <th className="border border-gray-300 px-3 py-2">F. Exp.</th>
              <th className="border border-gray-300 px-3 py-2">F. Nac.</th>
              <th className="border border-gray-300 px-3 py-2">Primer Nombre</th>
              <th className="border border-gray-300 px-3 py-2">Segundo Nombre</th>
              <th className="border border-gray-300 px-3 py-2">Primer Apellido</th>
              <th className="border border-gray-300 px-3 py-2">Segundo Apellido</th>
              <th className="border border-gray-300 px-3 py-2">Tipo Sangre</th>
              <th className="border border-gray-300 px-3 py-2">Género</th>
              <th className="border border-gray-300 px-3 py-2">Estatura</th>
              <th className="border border-gray-300 px-3 py-2">Peso</th>
              <th className="border border-gray-300 px-3 py-2">Direccion</th>
              <th className="border border-gray-300 px-3 py-2">Celular</th>
              <th className="border border-gray-300 px-3 py-2">Email</th>
              
            </tr>
          </thead>
          <tbody>
            {jugadores.map((jugador, index) => (
              <tr
                key={index}
                className="text-center odd:bg-white even:bg-gray-100"
              >
                <td className="border border-gray-300 px-3 py-2">{jugador.tipoDocumento}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.numeroDocumento}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.lugarExpedicion}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.fechaExpedicion}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.fechaNacimiento}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.primerNombre}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.segundoNombre}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.primerApellido}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.segundoApellido}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.tipoSangre}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.genero}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.estatura}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.peso}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.direccion}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.celular}</td>
                <td className="border border-gray-300 px-3 py-2">{jugador.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 block mx-auto"
      >
        + Nuevo Jugador
      </button>
    </div>
  );
}

export default ListaClub;
