import { crearCardPersonaje } from "../listado-personajes/listado";
import { apiPersonajes } from "../listado-personajes/listado.api";

const textoInput = () => {
  const inputText = document.getElementById("filter");
  if (inputText !== null && inputText !== undefined && inputText instanceof HTMLInputElement) {
    const busqueda = inputText.value.replace(/[^A-Za-z0-9]/gi, '').toUpperCase();
    inputText.value = "";
    return busqueda
  } else {
    throw new Error("Ha ocurrido un error con el buscador");
  };
};

export const filtrarNombre = async () => {
  const personajes = await apiPersonajes();
  const busqueda = textoInput();
  const container = document.getElementById("container");

  const personajeEncontrado = personajes.filter(personaje => personaje.nombre.toUpperCase().includes(busqueda));

  if (busqueda === "") {
    alert("Introduce texto");
  } else if (personajeEncontrado && personajeEncontrado.length > 0 && container !== null && container !== undefined && container instanceof HTMLDivElement){
    personajeEncontrado.forEach(personaje => {
      container.innerHTML = "";
      const busquedaCard = crearCardPersonaje(personaje);
      container.appendChild(busquedaCard);
    });
  } else {
    alert("Personaje no encontrado");
    throw new Error("Halgo ha salido mal en la búsqueda del personaje");
  };
};

