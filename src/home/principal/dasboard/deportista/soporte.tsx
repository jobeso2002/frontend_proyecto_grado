
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Soporte {
  tipo: string;
  descripcion: string;
  archivo?: File;
}


function Soporte() {
    const [soportes, setSoportes] = useState<Soporte[]>([
        { tipo: "SOPORTE", descripcion: "DOCUMENTO IDENTIDAD" },
        { tipo: "SOPORTE", descripcion: "FOTO" },
        { tipo: "SOPORTE", descripcion: "REGISTRO CIVIL" },
        { tipo: "SOPORTE", descripcion: "AFILIACION" },
        { tipo: "SOPORTE", descripcion: "CERTIFICADO EPS" },
        { tipo: "SOPORTE", descripcion: "RES. DE AFILIACION" },
      ]);
    
      const handleFileChange = (index: number, file: File) => {
        const updatedSoportes = [...soportes];
        updatedSoportes[index].archivo = file;
        setSoportes(updatedSoportes);
      };
    
      const handleAgregarSoporte = () => {
        setSoportes([...soportes, { tipo: "SOPORTE", descripcion: "NUEVO SOPORTE" }]);
      };

  return (
    <div className="p-4">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">TIPO DE DOCUMENTO</th>
            <th className="p-2 border">DESCRIPCIÓN</th>
            <th className="p-2 border">OPCIONES</th>
          </tr>
        </thead>
        <tbody>
          {soportes.map((soporte, index) => (
            <tr key={index}>
              <td className="p-2 border text-center">{soporte.tipo}</td>
              <td className="p-2 border text-center">{soporte.descripcion}</td>
              <td className="p-2 border text-center">
                <input
                  type="file"
                  onChange={(e) =>
                    e.target.files && handleFileChange(index, e.target.files[0])
                  }
                  className="hidden"
                  id={`file-input-${index}`}
                />
                <label
                  htmlFor={`file-input-${index}`}
                  className="cursor-pointer bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Subir Archivo
                </label>
                {soporte.archivo && (
                  <span className="ml-2 text-green-600">✔️ {soporte.archivo.name}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <Button onClick={handleAgregarSoporte} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          + Nuevo Soporte
        </Button>
      </div>
    </div>
  )
}

export default Soporte
