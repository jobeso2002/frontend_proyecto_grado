"use client";
import { useAuth } from "@/auth/authprovider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, Navigate } from "react-router-dom";
import liga from "@/assets/liga.jpg";

function Registro() {
  

  

  const auth = useAuth();
  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

 


  return (
    <div className="min-h-screen flex justify-center bg-green-300 px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-6">
          <img src={liga} alt="Logo" className="w-16 h-16 object-contain mb-4" />
          <h1 className="text-3xl font-bold text-green-800">REGISTRAR</h1>
        </div>
        
        <form  className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-2">Datos Personales</h3>
          </div>

          <select name="tipo_documento"  className="border p-2 rounded w-full">
            <option value="">Seleccione Tipo Documento</option>
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="CE">Cédula de Extranjería</option>
          </select>

          <Input type="text" name="numero_documento" placeholder="Número de Documento"  className="border p-2 rounded" />
          <Input type="date" name="fecha_exp_doc"  className="border p-2 rounded" />
          <Input type="text" name="lugar_exp_doc" placeholder="Lugar de Expedición"  className="border p-2 rounded" />
          <Input type="date" name="fecha_nacimiento"  className="border p-2 rounded" />
          <Input type="text" name="primer_nombre" placeholder="Primer Nombre"  className="border p-2 rounded" />
          <Input type="text" name="segundo_nombre" placeholder="Segundo Nombre"  className="border p-2 rounded" />
          <Input type="text" name="primer_apellido" placeholder="Primer Apellido"  className="border p-2 rounded" />
          <Input type="text" name="segundo_apellido" placeholder="Segundo Apellido"  className="border p-2 rounded" />

          <select name="sexo"  className="border p-2 rounded">
            <option value="">Seleccione Sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>

          <select name="tipo_sangre"  className="border p-2 rounded">
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

          <Input type="number" name="edad" placeholder="Edad"  className="border p-2 rounded" />
          <Input type="text" name="nacionalidad" placeholder="Nacionalidad"  className="border p-2 rounded" />
          <Input type="text" name="telefono" placeholder="Teléfono"  className="border p-2 rounded" />

          

          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-2">Credenciales</h3>
          </div>

          <Input type="email" name="email" placeholder="Correo Electrónico"  className="border p-2 rounded w-full" />
          <Input type="password" name="password" placeholder="Contraseña"  className="border p-2 rounded w-full" />

          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-2">Seleccionar Rol</h3>
          </div>

          <select name="id_rol"  className="border p-2 rounded w-full">
            <option value="">Seleccione un Rol</option>
            <option value="1">Administrador</option>
            <option value="2">Usuario</option>
            <option value="3">Deportista</option>
            <option value="4">Juez</option>
          </select>

          <div className="col-span-2">
            <Button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
              Registrar
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-black mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;
