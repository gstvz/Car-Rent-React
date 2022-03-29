import { api } from "..";

export async function getCars() {
  try {
    const { data } = await api.get("db.json");
    return data.cars;
  } catch (error) {
    console.log(error);
  }
}