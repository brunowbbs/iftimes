import { AxiosResponse } from "axios";
import { api } from "../../services/api";

type Time = {
  id: number;
  nome: string;
  img: string;
};

export async function getTimes(): Promise<AxiosResponse<Time[]>> {
  return await api.get("/times");
}
