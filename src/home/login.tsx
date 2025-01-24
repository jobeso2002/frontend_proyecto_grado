"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { useAuth } from '@/auth/authprovider';
import liga from "@/assets/liga.jpg";
import { loginUser } from '@/api';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  
  if (auth.isAuthenticated) {
    return <Navigate to="/dasboard" />;
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await loginUser(email, password);
      auth.login(userData.token);  // ✅ Solo se pasa el token
      alert("Inicio de sesión exitoso");
      navigate("/dasboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Error al iniciar sesión: ${error.message}`);
      } else {
        alert("Error desconocido al iniciar sesión");
      }
    }
  };
  
  

  
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-white">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-6">
          <img
            src={liga}
            alt="Logo"
            className="w-16 h-16 object-contain mb-4"
          />
          <h1 className="text-2xl font-bold text-green-800">Bienvenido</h1>
          <p className="text-sm text-gray-600">
            Inicie sesión en su cuenta
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded block border-gray-300 focus:ring-green-500 focus:border-green-500 w-full"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </Label>
            <Input
              id='password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded block border-gray-300 focus:ring-green-500 focus:border-green-500 w-full"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <Label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-800"
              >
                Recordar mi correo
              </Label>
            </div>
            <Link
              to="/recuperar"
              className="text-sm text-green-600 hover:underline"
            >
              ¿Has olvidado tu contraseña?
            </Link>
          </div>
          <Button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
            Iniciar Sesión
          </Button>
        </form>
        <p className="text-center text-sm text-gray-700 mt-4">
          ¿No tienes cuenta?{" "}
          <Link to="/registrar" className="text-green-600 hover:underline">
            Crea una cuenta
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
