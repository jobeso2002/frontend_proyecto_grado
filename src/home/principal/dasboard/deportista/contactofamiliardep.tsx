import { Button } from "@/components/ui/button";

import React, { useEffect, useState } from "react";
import { useForm } from "@/components/hooks/useform";
import { useDeportistaStore } from "@/store/deportista/deportista";
import { useContactoStore } from "@/store/contacto/contacto";


function ContactoFamiliarDep() {
    
    const { form, handleChange, setForm } = useForm({
        parentesco: "",
        direccion_residencia: "",
        barrio: "",
        deportistaId: 0,
        // Campos que se autocompletarán
        posicion: "",
        estado: "",
        numero_camisa: 0,
        estatura: 0,
        peso: 0,
        id_club: 0,
        id_persona: 0,
    });

    const { ConsultarDeportista, deportistas } = useDeportistaStore();
    const { crear_contacto } = useContactoStore();
    const [deportistaId, setDeportistaId] = useState("");

    useEffect(() => {
        if (deportistas.length === 0) {
            ConsultarDeportista();
        }
    }, [ConsultarDeportista, deportistas.length]);

    useEffect(() => {
        if (deportistaId) {
            const deportista = deportistas.find(d => d.id.toString() === deportistaId);
            if (deportista) {
                setForm(prev => ({
                    ...prev,
                    deportistaId: deportista.id,
                    posicion: deportista.posicion,
                    estado: deportista.estado,
                    numero_camisa: deportista.numero_camisa,
                    estatura: deportista.estatura,
                    peso: deportista.peso,
                    id_club: deportista.id_club,
                    id_persona: deportista.id_persona,
                }));
            }
        }
    }, [deportistaId, deportistas, setForm]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
          // Crear objeto con solo los campos necesarios para el contacto
          const contactoData = {
              id: 0, // Default value for id
              parentesco: form.parentesco,
              direccion_residencia: form.direccion_residencia,
              barrio: form.barrio,
              deportistaId: form.deportistaId
          };
          
          await crear_contacto(contactoData);
         
          
          // Limpiar formulario después de enviar
          setForm({
              parentesco: "",
              direccion_residencia: "",
              barrio: "",
              deportistaId: 0,
              posicion: "",
              estado: "",
              numero_camisa: 0,
              estatura: 0,
              peso: 0,
              id_club: 0,
              id_persona: 0,
          });
          setDeportistaId("");
      } catch (error) {
          console.error("Error al crear contacto:", error);
          alert("Error al crear contacto");
      }
  };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Datos De Contactos</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-6">
                {/* Selección de deportista */}
                <div className="col-span-4">
                    <label htmlFor="deportistaId" className="block mb-2 font-semibold">
                        Seleccionar Deportista:
                    </label>
                    <select
                        id="deportistaId"
                        name="deportistaId"
                        value={deportistaId}
                        onChange={(e) => setDeportistaId(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    >
                        <option value="">Seleccione un deportista</option>
                        {deportistas.map((deportista) => (
                            <option key={deportista.id} value={deportista.id}>
                                {deportista.id_persona} {deportista.estado} - {deportista.id}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Campos autocompletados (solo lectura) */}
                <div>
                    <label className="block mb-2 font-semibold">id deportista:</label>
                    <input
                        type="text"
                        value={form.deportistaId}
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">Posicion:</label>
                    <input
                        type="text"
                        value={form.posicion}
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">estado:</label>
                    <input
                        type="text"
                        value={form.estado}
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">estatura:</label>
                    <input
                        type="text"
                        value={form.estatura}
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">peso:</label>
                    <input
                        type="text"
                        value={form.peso}
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="block mb-2 font-semibold">numero de camisa:</label>
                    <input
                        type="text"
                        value={form.numero_camisa}
                        readOnly
                        className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                    />
                </div>

                {/* Campos editables para el contacto */}
                <div>
                    <label htmlFor="parentesco" className="block mb-2 font-semibold">
                        Parentesco:
                    </label>
                    <select
                        id="parentesco"
                        name="parentesco"
                        value={form.parentesco}
                        onChange={handleChange}
                        className="border border-teal-600 p-2 rounded w-full"
                        required
                    >
                        <option value="">Seleccione Parentesco</option>
                        <option value="padre">Padre</option>
                        <option value="madre">Madre</option>
                        <option value="abuela">Abuela</option>
                        <option value="abuelo">Abuelo</option>
                        <option value="tio">Tío</option>
                        <option value="primo">Primo</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="direccion_residencia" className="block mb-2 font-semibold">
                        Dirección:
                    </label>
                    <input
                        type="text"
                        id="direccion_residencia"
                        name="direccion_residencia"
                        value={form.direccion_residencia}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="barrio" className="block mb-2 font-semibold">
                        Barrio:
                    </label>
                    <input
                        type="text"
                        id="barrio"
                        name="barrio"
                        value={form.barrio}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                </div>

           

                <div className="col-span-4 flex justify-center">
                    <Button 
                        type="submit" 
                        className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Guardar Contacto
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ContactoFamiliarDep;