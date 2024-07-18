console.log("Hi");
import Axios from "axios";

const pruebaApi = async () => {
  try {
    const response = await Axios.get("http://localhost:3000/personajes");
    console.log(response.data);
  } catch(error) {
    throw new Error("La llamada ha sali mal");
  };
};

pruebaApi();
