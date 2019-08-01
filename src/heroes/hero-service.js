import http from "../shared/http-service";
import { BaseUrl } from "../api-config";

export async function getHeroes() {
  return await http.get(BaseUrl.heroes);
}

export async function getHero(id) {
  return await http.get(`${BaseUrl.heroes}${id}`);
}

export async function addHero(hero) {
  return await http.post(BaseUrl.heroes, hero);
}

export async function updateHero(hero) {
  return await http.put(`${BaseUrl.heroes}${hero.id}`, hero);
}

export async function removeHero(id) {
  return await http.delete(`${BaseUrl.heroes}${id}`);
}
