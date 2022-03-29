import { toast } from "react-toastify";
import { api } from "..";

export async function getCars() {
  try {
    const { data } = await api.get("dbs.json");
    return data.cars;
  } catch (error) {
    toast.error("Could not connect to server!");
  }
}
