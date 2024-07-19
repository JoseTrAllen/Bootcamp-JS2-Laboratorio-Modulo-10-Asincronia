
/* import { filtrarNombre } from "../buscador-personajes/buscador-personaje"; */
import { filtrarNombre } from "../buscador-personajes/buscador-personaje";
import { apiPersonajes } from "./listado.api";
import { Personajes } from "./listado.model";

const crearImagen = (src: string, alt: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = `http://localhost:3000/${src}`;
  imagen.alt = alt;
  return imagen;
};

const crearNombrePersonaje = (nombre: string): HTMLHeadingElement => {
  const header = document.createElement("h2");
  header.textContent = nombre;
  return header;
};

const crearParrafoEspecialidad = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = `Espedialidad: ${texto}`;
  return parrafo;
};

const crearParrafoHabilidades = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = `Habilidades: ${texto}`;
  return parrafo;
};

export const crearCardPersonaje = (personaje: Personajes): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add("card");

  const imagenPersonaje = crearImagen(personaje.imagen, personaje.nombre);
  div.appendChild(imagenPersonaje);

  const nombrePersonaje = crearNombrePersonaje(personaje.nombre);
  div.appendChild(nombrePersonaje);

  const especialidadPersonaje = crearParrafoEspecialidad(personaje.especialidad);
  div.appendChild(especialidadPersonaje);

  const habilidadesPersonaje = crearParrafoHabilidades(personaje.habilidades);
  div.appendChild(habilidadesPersonaje);

  return div;
};

const pintarListaPersonajes = async () => {
  const personajes = await apiPersonajes();
  const container = document.getElementById("container");
  if (container !== null && container !== undefined && container instanceof HTMLDivElement) {
    personajes.forEach(personaje => {
      const contenedorPersonajes = crearCardPersonaje(personaje);
      container.appendChild(contenedorPersonajes)
    });
  } else {
    throw new Error("No se ha podido crear la lista de personajes");
  };
}; 

document.addEventListener("DOMContentLoaded", pintarListaPersonajes); 

const botonFiltrar = document.getElementById("filter-button");
if (botonFiltrar && botonFiltrar instanceof HTMLButtonElement) {
  botonFiltrar.addEventListener("click", () => {
    
    filtrarNombre() 
  });
};


