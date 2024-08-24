import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-times-two.vercel.app",
});
const token = localStorage.getItem("@token");

api.interceptors.request.use(
  (req) => {
    req.headers["Authorization"] = `${token}`;
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
