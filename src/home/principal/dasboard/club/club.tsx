import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function Club() {
  const [clubes, setClubes] = React.useState([
    { id: 1, nombre: "CLUB VOLEIBOL ACADEMIA VOLEY KIDS", fecha: "2024-12-26", estado: "Activo" },
  ]);

  const [nuevoClub, setNuevoClub] = React.useState({ nombre: "", fecha: "", estado: "Activo" });

  const agregarClub = () => {
    if (nuevoClub.nombre && nuevoClub.fecha) {
      setClubes([...clubes, { id: Date.now(), ...nuevoClub }]);
      setNuevoClub({ nombre: "", fecha: "", estado: "Activo" });
    }
  };

  const eliminarClub = (id: number) => {
    setClubes(clubes.filter((club) => club.id !== id));
  };

  const editarClub = (id: number) => {
    const clubEditar = clubes.find((club) => club.id === id);
    if (clubEditar) {
      setNuevoClub(clubEditar);
      setClubes(clubes.filter((club) => club.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">CLUBES</h1>

      {/* Formulario para agregar club */}
      <div className="mb-6 border p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Agregar Club</h2>
        <div className="flex gap-4">
          <Input
            placeholder="Nombre del club"
            value={nuevoClub.nombre}
            onChange={(e) => setNuevoClub({ ...nuevoClub, nombre: e.target.value })}
          />
          <Input
            type="date"
            value={nuevoClub.fecha}
            onChange={(e) => setNuevoClub({ ...nuevoClub, fecha: e.target.value })}
          />
          <Button onClick={agregarClub} className="bg-green-500 text-white px-4 py-2 rounded">
            + Adicionar
          </Button>
        </div>
      </div>

      {/* Sección: Club Perteneciente */}
      <Section title="CLUB PERTENECIENTE" clubes={clubes} onDelete={eliminarClub} onEdit={editarClub} />
      
      {/* Sección: Transferencia de Club */}
      <Section title="TRANSFERENCIA DE CLUB" clubes={clubes} onDelete={eliminarClub} onEdit={editarClub} />
    </div>
  );
}

function Section({
  title,
  clubes,
  onDelete,
  onEdit,
}: {
  title: string;
  clubes: { id: number; nombre: string; fecha: string; estado: string }[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}) {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">CLUB QUE PERTENECE</th>
            <th className="border p-2">FECHA AFILIACIÓN</th>
            <th className="border p-2">ESTADO AFILIACIÓN</th>
            <th className="border p-2">OPCIONES</th>
          </tr>
        </thead>
        <tbody>
          {clubes.map((club) => (
            <tr key={club.id} className="border">
              <td className="border p-2">{club.nombre}</td>
              <td className="border p-2">{club.fecha}</td>
              <td className="border p-2">{club.estado}</td>
              <td className="border p-2 flex justify-center gap-2">
                <Button onClick={() => onEdit(club.id)} className="bg-blue-500 text-white px-2 py-1 rounded">
                  ✏️
                </Button>
                <Button onClick={() => onDelete(club.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  ❌
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Club;
