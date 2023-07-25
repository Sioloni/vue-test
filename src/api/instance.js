import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2234/api/v1/",
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

export default api;
