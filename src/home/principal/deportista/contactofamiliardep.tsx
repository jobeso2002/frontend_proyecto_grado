import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {cn} from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";

function ContactoFamiliarDep() {
    const [date, setDate] = React.useState<Date>();

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Datos De Contactos</h1>
        <form className="grid grid-cols-4 gap-6">
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
            <label htmlFor="parentesco" className="block mb-2 font-semibold">Parentesco:</label>
            <Select>
              <SelectTrigger className="border border-teal-600 p-2 rounded w-full">
                <SelectValue placeholder="Parentesco" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="padre">Padre</SelectItem>
                <SelectItem value="madre">Madre</SelectItem>
                <SelectItem value="abuela">Abuela</SelectItem>
                <SelectItem value="abuelo">Abuelo</SelectItem>
                <SelectItem value="tio">Tio</SelectItem>
                <SelectItem value="primo">Primo</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
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
            <label htmlFor="barrio" className="block mb-2 font-semibold">Barrio:</label>
            <input
              type="text"
              id="barrio"
              name="barrio"
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

export default ContactoFamiliarDep
