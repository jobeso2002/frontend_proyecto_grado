import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./auth/authprovider";

//validar si el usuario esta autenticado mostrar la ruta que esta protegida
export default function ProtectedRoute(){
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}


