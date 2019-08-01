import http from "../shared/http-service";
import { BaseUrl } from "../api-config";

export async function getVillains() {
  return await http.get(BaseUrl.villains);
}

export async function getVillain(id) {
  return await http.get(`${BaseUrl.villains}${id}`);
}

export async function addVillain(villain) {
  return await http.post(BaseUrl.villains, villain);
}

export async function updateVillain(villain) {
  return await http.put(`${BaseUrl.villains}${villain.id}`, villain);
}

export async function removeVillain(id) {
  return await http.delete(`${BaseUrl.villains}${id}`);
}
