import axios, {AxiosError} from "axios";
import { Product } from "../types/product";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export const getProducts = async () => {
  const response = await api.get("/products").catch((e: AxiosError) => {
    console.error(JSON.stringify(e.response));
  });

  // エラーハンドリング
  if (response == undefined) {
    console.log("responseがundifinedです");
    return;
  }

  if (response?.status !== 200) {
    console.log("200以外のstatusです");
    return;
  }
  return response.data.products as Product[];
}

