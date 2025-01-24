"use client"
import { useAuth } from '@/auth/authprovider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import liga from '@/assets/liga.jpg';
import { registerUser } from '@/api'


function Registro() {
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();
  //aqui vamos hacer que uno debe iniciar sesion para que me pase a dasboard del resto no me va a dejar
  const auth = useAuth();
  if(auth.isAuthenticated){
    return <Navigate to="/dasboard"/>
  }

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registerUser(username, email, password);
      alert(response.message);
      navigate("/login"); // Redirige al login después del registro
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Error al registrar usuario: ${error.message}`);
      } else {
        alert("Error desconocido al registrar usuario");
      }
      };
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
              <h1 className="text-2xl font-bold text-green-800">REGISTRAR</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor='userName' className='text-black mb-2 block text-sm'>
                UserName
                </Label>
                <Input type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='p-3 rounded block mb-2 border-green-700 text-black w-full'
                placeholder='usuario'
                />
              </div>
              <div>
                <Label htmlFor='email' className='text-black mb-2 block text-sm'>
                Email
                </Label>    
                <Input type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 rounded block mb-2 border-green-700 text-black w-full'
                placeholder='email@example'
                />
              </div>
              <div>
                <Label htmlFor='password' className='text-black mb-2 block text-sm'>
                Contraseña
                </Label>
                <Input type='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 rounded block mb-2 border-green-700 text-black w-full'
                placeholder='********'
                />
              </div>
      
              <Button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
                  Registrar
              </Button>
            </form>
          <p className='text-center text-sm text-black mt-4'>
            ¿Ya tienes cuenta Inicia sesion?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Iniciar sesion
            </Link>
          </p>
      </div>
    </div>
  )
}

export default Registro