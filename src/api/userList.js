import axios from "axios";
import {Port} from "@/api/port";

const api = axios.create({
  baseURL: `http://localhost:${Port}/api/v1/`,
});

export function getUsers() {
  return api
    .get("product/user")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw new Error("Failed to fetch users");
    });
}

export default getUsers;
