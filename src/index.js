// Importaciones
import { init } from "./js/chistes-page.js";
import { obtenerUsuarios } from "./js/http-provider.js";

init()

obtenerUsuarios().then(console.log);