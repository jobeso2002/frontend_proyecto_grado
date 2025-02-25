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
        config.headers["Authorization"] = `Bearer ${token}`;
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
  