import { AxiosResponse } from "axios";
import { api } from "../../services/api";
import { Product } from "./types";

export async function getProducts(
  id?: string
): Promise<AxiosResponse<Product[]>> {
  return api.get(`/times/${id}`);
}
