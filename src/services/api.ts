import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-times-two.vercel.app",
});
