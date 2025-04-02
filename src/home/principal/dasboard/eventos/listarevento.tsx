
interface Evento {
  evento: string;
  sede: string;
  fechaInicio: string;
  fechaFinal: string;
  categoria: string;
}

function ListarEventos(){
  const eventos: Evento[] = [
    {
      evento: 'CAMP NACIONAL INFANTIL',
      sede: 'VALLEDUPAR',
      fechaInicio: '2024-12-26',
      fechaFinal: '2024-12-26',
      categoria: 'FEMENINA'
    },
    {
      evento: 'CAMP NACIONALMENORES',
      sede: 'VALLEDUPAR',
      fechaInicio: '2024-12-26',
      fechaFinal: '2024-12-26',
      categoria: 'MASCULINA'
    },
    {
      evento: 'CAMP NACIONAL JUVENIL',
      sede: 'VALLEDUPAR',
      fechaInicio: '2024-12-26',
      fechaFinal: '2024-12-26',
      categoria: 'MASCULINA'
    },
    {
      evento: 'CAMP NACIONAL MAYORES',
      sede: 'VALLEDUPAR',
      fechaInicio: '2024-12-26',
      fechaFinal: '2024-12-26',
      categoria: 'FEMENINA'
    },
    {
      evento: 'CAMP NACIONAL SUB 21',
      sede: '',
      fechaInicio: '2024-12-26',
      fechaFinal: '2024-12-26',
      categoria: 'FEMENINA'
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">LISTA EVENTOS - TOTAL {eventos.length}</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left">EVENTO</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">SEDE</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">FECHA INICIO</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">FECHA FINAL</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">CATEGORIA</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-2 px-4 border-b border-gray-200">{evento.evento}</td>
                <td className="py-2 px-4 border-b border-gray-200">{evento.sede || '-'}</td>
                <td className="py-2 px-4 border-b border-gray-200">{evento.fechaInicio}</td>
                <td className="py-2 px-4 border-b border-gray-200">{evento.fechaFinal}</td>
                <td className="py-2 px-4 border-b border-gray-200">{evento.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarEventos;