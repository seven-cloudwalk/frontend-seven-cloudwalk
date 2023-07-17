import axios from "axios";

const api = axios.create({
  baseURL: "https://web-production-9bdf.up.railway.app",
  // baseURL: "localhost:3500",
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.log(error);
  }
});

export default api;
