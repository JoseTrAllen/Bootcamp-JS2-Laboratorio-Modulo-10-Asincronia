import { crearCardPersonaje } from "../listado-personajes/listado";
import { apiPersonajes } from "../listado-personajes/listado.api";

const textoInput = () => {
  const inputText = document.getElementById("filter");
  if (inputText !== null && inputText !== undefined && inputText instanceof HTMLInputElement) {
    const busqueda = inputText.value
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

  const personajeEncontrado = personajes.find(personaje => personaje.nombre.toUpperCase() === busqueda.toUpperCase());

  if (personajeEncontrado && container !== null && container !== undefined && container instanceof HTMLDivElement) {
    container.innerHTML = "";
    const busquedaCard = crearCardPersonaje(personajeEncontrado);
    return container.appendChild(busquedaCard);
    } else {
    alert("Personaje no encontrado");
    throw new Error("Halgo ha salido mal en la búsqueda del personaje");
  };
};

/* 
TO DO:
- Ignorar caracteres especiales y espacios en la búsqueda.
- Implementar que la búsqueda encuentre solamente introducionde algunas letras
*/
