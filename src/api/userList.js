import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2234/api/v1/",
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
