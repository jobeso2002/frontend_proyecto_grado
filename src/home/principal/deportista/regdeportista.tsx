import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {cn} from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, UploadCloud } from "lucide-react";
import React from "react";

function RegDeportista() {
  const [date, setDate] = React.useState<Date>();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setSelectedImage(fileReader.result as string);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Registrar Deportista</h1>
      <form className="grid grid-cols-4 gap-6">
      <div className="col-span-1 flex flex-col items-center">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Foto del Deportista"
              className="w-32 h-32  object-cover border border-gray-300"
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center border border-gray-300  bg-gray-100">
              <UploadCloud className="h-8 w-8 text-gray-400" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
            className="hidden"
          />
          <Button
            type="button"
            onClick={() => document.getElementById("fileInput")?.click()}
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
          >
            Subir Foto
          </Button>
        </div>




        <div>
          <label htmlFor="tipoDoc" className="block mb-2 font-semibold">Tipo de Documento:</label>
          <Select>
            <SelectTrigger className="border border-teal-600 p-2 rounded w-full">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tarjeta Identidad">Tarjeta Identidad</SelectItem>
              <SelectItem value="Cedula Ciudadania">Cedula Ciudadania</SelectItem>
              <SelectItem value="Cedula Extranjera">Cedula Extranjera</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="nDocumento" className="block mb-2 font-semibold">Número Documento:</label>
          <input
            type="text"
            id="nDocumento"
            name="nDocumento"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="LugarExpedicion" className="block mb-2 font-semibold">Lugar Expedición:</label>
          <input
            type="text"
            id="LugarExpedicion"
            name="LugarExpedicion"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="FechaExpedicion" className="block mb-2 font-semibold">Fecha Expedición:</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Fecha Expedicion</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label htmlFor="FechaNacimiento" className="block mb-2 font-semibold">Fecha Nacimiento:</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Fecha Nacimiento</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label htmlFor="pnombre" className="block mb-2 font-semibold">Primer Nombre:</label>
          <input
            type="text"
            id="pnombre"
            name="pnombre"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="snombre" className="block mb-2 font-semibold">Segundo Nombre:</label>
          <input
            type="text"
            id="snombre"
            name="snombre"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="papellido" className="block mb-2 font-semibold">Primer Apellido:</label>
          <input
            type="text"
            id="papellido"
            name="papellido"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="sapellido" className="block mb-2 font-semibold">Segundo Apellido:</label>
          <input
            type="text"
            id="sapellido"
            name="sapellido"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="tipoSangre" className="block mb-2 font-semibold">Tipo de Sangre:</label>
          <Select>
            <SelectTrigger className="border border-teal-600 p-2 rounded w-full">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="o+">O+</SelectItem>
              <SelectItem value="a+">A+</SelectItem>
              <SelectItem value="b+">B+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="genero" className="block mb-2 font-semibold">Género:</label>
          <Select>
            <SelectTrigger className="border border-teal-600 p-2 rounded w-full">
              <SelectValue placeholder="Género" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="masculino">Masculino</SelectItem>
              <SelectItem value="femenino">Femenino</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="estatura" className="block mb-2 font-semibold">Estatura (cm):</label>
          <input
            type="text"
            id="estatura"
            name="estatura"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="peso" className="block mb-2 font-semibold">Peso (kg):</label>
          <input
            type="text"
            id="peso"
            name="peso"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="direccion" className="block mb-2 font-semibold">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="celular" className="block mb-2 font-semibold">Celular:</label>
          <input
            type="text"
            id="celular"
            name="celular"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        
        <div className="col-span-4 flex justify-center">
            <Button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
                 Guardar
            </Button>
        </div>

      </form>
    </div>
  );
}

export default RegDeportista;
