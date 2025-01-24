const BASE_URL = "http://localhost:5000/api/auth";

interface LoginResponse {
  token: string; // o cualquier estructura que devuelva tu backend
}

interface RegisterResponse {
  message: string; // o lo que tu backend envíe
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error al iniciar sesión");
  }
  return await response.json();
}

export async function registerUser(username: string, email: string, password: string): Promise<RegisterResponse> {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    throw new Error("Error al registrar usuario");
  }
  return await response.json();
}

