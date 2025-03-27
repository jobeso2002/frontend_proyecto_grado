<<<<<<< HEAD
// import { decryptData } from "@/store/decrypt/decryptData";
=======
import { decryptData } from "@/store/decrypt/decryptData";
>>>>>>> 47d1fd0 (error para registrar usuario problema en el axios me deja registrar deportista si elimino la conf en el axio puedo reg usuario)
import axios from "axios";

const config = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const Api = axios.create({
    baseURL: config,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
   
  Api.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      if (token) {
<<<<<<< HEAD
        // const decryptedToken = decryptData(token);
        config.headers["Authorization"] = `Bearer ${token}`;
=======
        const decryptedToken = decryptData(token);
        config.headers["Authorization"] = `Bearer ${decryptedToken}`;
>>>>>>> 47d1fd0 (error para registrar usuario problema en el axios me deja registrar deportista si elimino la conf en el axio puedo reg usuario)
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
   
  Api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  