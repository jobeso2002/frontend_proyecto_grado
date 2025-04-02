import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function RegistrarEvento() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Registrar Evento</h1>
      <form className="grid grid-cols-4 gap-6">
        <div>
          <label htmlFor="nombre_evento" className="block mb-2 font-semibold">
            Nombre del Evento:
          </label>
          <input
            type="text"
            id="nombre_evento"
            name="nombre_evento"
            placeholder="Nombre del Evento"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="sede" className="block mb-2 font-semibold">
            Sede:
          </label>
          <input
            type="text"
            id="sede"
            name="sede"
            placeholder="Sede del Evento valledupar"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="fecha_inicio" className="text-black text-sm">
            Fecha Inicio:
          </Label>
          <Input
            type="date"
            name="fecha_inicio"
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="fecha_final" className="text-black text-sm">
            Fecha Final:
          </Label>
          <Input
            type="date"
            name="fecha_final"
            className="border p-2 rounded"
          />
        </div>

        <div>
                  <Label htmlFor="categoria" className="block mb-2 font-semibold">
                    Categoria:
                  </Label>
                  <select
                    id="categoria"
                    name="categoria"
                    
                    className="border p-2 rounded"
                  >
                    <option value="">Tipo de Categoria</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Mixto">Mixto</option>
                  </select>
                </div>
      </form>
    </div>
  );
}

export default RegistrarEvento;
