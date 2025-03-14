import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Club {
  id: number;
  nombre: string;
}

interface Jugador {
  id: number;
  nombre: string;
  clubId: number;
}

export default function TransferenciaJugador() {
  const [clubes] = useState<Club[]>([
    { id: 1, nombre: "Club Voleibol Academia Voley Kids" },
    { id: 2, nombre: "Club Voleibol Estrellas" },
    { id: 3, nombre: "Club Voleibol Titanes" },
  ]);

  const [jugadores, setJugadores] = useState<Jugador[]>([
    { id: 1, nombre: "Juan Pérez", clubId: 1 },
    { id: 2, nombre: "Carlos Rodríguez", clubId: 2 },
  ]);

  const [jugadorSeleccionado, setJugadorSeleccionado] = useState<number | null>(null);
  const [clubDestino, setClubDestino] = useState<number | null>(null);

  const transferirJugador = () => {
    if (jugadorSeleccionado && clubDestino) {
      setJugadores((prev) =>
        prev.map((jugador) =>
          jugador.id === jugadorSeleccionado ? { ...jugador, clubId: clubDestino } : jugador
        )
      );
      setJugadorSeleccionado(null);
      setClubDestino(null);
      alert("Transferencia realizada con éxito!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">TRANSFERENCIA DE CLUB</h1>
      <div className="border rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Seleccionar Jugador y Club Destino</h2>
        <div className="flex gap-4 mb-4">
          <select
            className="w-full p-2 border rounded"
            value={jugadorSeleccionado ?? ""}
            onChange={(e) => setJugadorSeleccionado(Number(e.target.value))}
          >
            <option value="" disabled>Selecciona un jugador</option>
            {jugadores.map((jugador) => (
              <option key={jugador.id} value={jugador.id}>
                {jugador.nombre} ({clubes.find(c => c.id === jugador.clubId)?.nombre})
              </option>
            ))}
          </select>

          <select
            className="w-full p-2 border rounded"
            value={clubDestino ?? ""}
            onChange={(e) => setClubDestino(Number(e.target.value))}
            disabled={!jugadorSeleccionado}
          >
            <option value="" disabled>Selecciona un club</option>
            {clubes
              .filter((club) => club.id !== jugadores.find(j => j.id === jugadorSeleccionado)?.clubId)
              .map((club) => (
                <option key={club.id} value={club.id}>{club.nombre}</option>
              ))}
          </select>
        </div>
        <Button
          onClick={transferirJugador}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={!jugadorSeleccionado || !clubDestino}
        >
          Transferir Jugador
        </Button>
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Jugadores y Clubes</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">JUGADOR</th>
              <th className="border p-2">CLUB PERTENECIENTE</th>
            </tr>
          </thead>
          <tbody>
            {jugadores.map((jugador) => (
              <tr key={jugador.id} className="border">
                <td className="border p-2">{jugador.nombre}</td>
                <td className="border p-2">{clubes.find(c => c.id === jugador.clubId)?.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
