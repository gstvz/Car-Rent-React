import { api } from "../";

export async function getCars() {
  try {
    const response = await api.get("db.json");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}