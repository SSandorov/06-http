// Importaciones

import { init as initChistes } from "./js/chistes-page.js";
import { init as initUsuarios } from "./js/usuarios-page.js";

import { obtenerUsuarios } from "./js/http-provider.js";

initChistes()

initUsuarios()

obtenerUsuarios().then(console.log);