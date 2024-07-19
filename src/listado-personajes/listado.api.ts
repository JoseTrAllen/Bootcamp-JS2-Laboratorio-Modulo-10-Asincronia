import Axios from "axios";
import {Personajes} from "./listado.model";

export const apiPersonajes = async (): Promise<Personajes[]> => {
  try {
    const { data } = await Axios.get("http://localhost:3000/personajes");
    return data;
  } catch(error) {
    throw new Error("La llamada a la API ha fallado");
  };
} ;