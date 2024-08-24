import { AxiosResponse } from "axios";
import { api } from "../../services/api";

export function registerServices(): Promise<AxiosResponse<string[]>> {
  return api.get("/usuarios");
}
