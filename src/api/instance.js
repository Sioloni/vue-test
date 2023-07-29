import axios from "axios";
import {Port} from "@/api/port";
const api = axios.create({
  baseURL: `http://localhost:${Port}/api/v1/`,
});

export function getProducts() {
  return api
    .get("product")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw new Error("Failed to fetch products");
    });
}

export default getProducts;
