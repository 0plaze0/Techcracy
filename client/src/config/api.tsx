import axios from "axios";

axios.defaults.withCredentials = true; //for cookies
export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});
