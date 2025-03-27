import CryptoJS from "crypto-js"; // Importa CryptoJS

// Define una clave secreta para encriptar
const SECRET_KEY = 'my-secret-key';

// Función para encriptar datos
export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Función para desencriptar datos
export const decryptData = (ciphertext: string) => {
  const bytes =  CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return  JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};