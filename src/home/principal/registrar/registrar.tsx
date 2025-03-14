"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigate } from "react-router-dom";
import liga from "@/assets/liga.jpg";
import { useAuthStore } from "@/store/authstore";
import { useForm } from "@/components/hooks/useform";
import { Register } from "@/interface/user/user.interface";
import { RolesStore } from "@/store/role/role";
import { useEffect } from "react";
import { useUserStore } from "@/store/usuario/user";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function Registro() {
  const { crear_persona } = useUserStore();
  const { form, handleChange } = useForm<Register>({
    tipo_documento: "",
    numero_documento: "",
    fecha_exp_doc: "",
    lugar_exp_doc: "",
    fecha_nacimiento: "",
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    sexo: "",
    tipo_sangre: "",
    edad: 0,
    nacionalidad: "",
    telefono: "",
    email: "",
    password: "",
    id_rol: 0,
  });

  const { ConsultRole, role } = RolesStore();
  useEffect(() => {
    if (role.length === 0) {
      ConsultRole();
    }
  }, [ConsultRole, role.length]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", form); // Verifica que `id_rol` no sea null

    try {
      await crear_persona(form);
      console.log("Registro exitoso");
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  const auth = useAuthStore();
  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex justify-center bg-green-300 px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-6">
          <img
            src={liga}
            alt="Logo"
            className="w-16 h-16 object-contain mb-4"
          />
          <h1 className="text-3xl font-bold text-green-800">REGISTRAR</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-2">Datos Personales</h3>
          </div>

          <select
            name="tipo_documento"
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Seleccione Tipo Documento</option>
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="CE">Cédula de Extranjería</option>
          </select>

          <Input
            type="text"
            name="numero_documento"
            onChange={handleChange}
            placeholder="Número de Documento"
            className="border p-2 rounded"
            pattern="\d*"
          />
          <div className="flex flex-col">
            <Label htmlFor="fecha_exp_doc" className="text-gray-700 text-sm">
              Fecha de Expedición
            </Label>
            <Input
              type="date"
              name="fecha_exp_doc"
              onChange={handleChange} 
              className="border p-2 rounded"
            />
          </div>

          <Input
            type="text"
            name="lugar_exp_doc"
            onChange={handleChange}
            placeholder="Lugar de Expedición"
            className="border p-2 rounded"
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑ ]+"
          />
          
          <div className="flex flex-col"> 
          <Label htmlFor="fecha_exp_doc" className="text-gray-700 text-sm">
              Fecha de Nacimiento
            </Label>
          <Input
            type="date"
            name="fecha_nacimiento"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          </div>
          
          <Input
            type="text"
            name="primer_nombre"
            onChange={handleChange}
            placeholder="Primer Nombre"
            className="border p-2 rounded"
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑ ]+"
          />
          <Input
            type="text"
            name="segundo_nombre"
            onChange={handleChange}
            placeholder="Segundo Nombre"
            className="border p-2 rounded"
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑ ]+"
          />
          <Input
            type="text"
            name="primer_apellido"
            onChange={handleChange}
            placeholder="Primer Apellido"
            className="border p-2 rounded"
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑ ]+"
          />
          <Input
            type="text"
            name="segundo_apellido"
            onChange={handleChange}
            placeholder="Segundo Apellido"
            className="border p-2 rounded"
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑ ]+"
          />

          <select
            name="sexo"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Seleccione Sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>

          <select
            name="tipo_sangre"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Seleccione Tipo de Sangre</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <Input
            type="number"
            name="edad"
            onChange={handleChange}
            placeholder="Edad"
            className="border p-2 rounded"
            min="1"
          />
          <Input
            type="text"
            name="nacionalidad"
            onChange={handleChange}
            placeholder="Nacionalidad"
            className="border p-2 rounded"
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑ ]+"
          />
          <Input
            type="number"
            name="telefono"
            onChange={handleChange}
            placeholder="Teléfono"
            className="border p-2 rounded"
            pattern="\d*"
          />

          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-2">Credenciales</h3>
          </div>

          <Input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Correo Electrónico"
            className="border p-2 rounded w-full"
          />
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Contraseña"
            className="border p-2 rounded w-full"
          />

          <select
            name="id_rol"
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Seleccione un Rol</option>
            {role.map((rol) => (
              <option key={rol.id} value={rol.id}>
                {rol.name}
              </option>
            ))}
          </select>

          <div className="col-span-2">
            <Button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Registrar
            </Button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-700 mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Iniciar Sesion
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;
