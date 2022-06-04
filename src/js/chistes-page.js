import { obtenerChiste } from "./http-provider.js";

// Variable que almacena los cambios del body
const body = document.body;
// Variables que almacenan el botón y la lista
/*
Debemos declarar las variables, pero no inicializarlas hasta que el código sea creado, 
por lo que debemos emplear let en lugar de const
*/
let     btnOtro,
        olList; 

// Función que maneja la inyección dinámica del HTML
const crearChistesHTML = () => {

    // Variable que almacena el código HTML
    const html = 
    `
        <h1 class="mt-5">Chistes</h1>
        <div style="height: 1px; background-color:black;"></div>
        <button class="btn btn-primary">Otro chiste</button>
        <ol class="mt-2 list-group"></ol>
    `;

    // Variable que crea el contenedor que almacena la variable html
    const divChistes = document.createElement('div');
    // Añadimos el contenido del html en esta variable
    divChistes.innerHTML = html;

    // Añadimos estos cambios al body de la página
    body.append(divChistes);

}

// En esta función añadimos todos los eventos que manejaremos
const eventos = () => {

    // Como el botón y la lista ya ha sido creada, ahora podemos inicializar las variables
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    // Añadimos los eventos para ambas variables
    btnOtro.addEventListener('click', async() => {

        // Bloqueamos el botón hasta que se presente en pantalla la primera petición
        btnOtro.disabled = true;

        // Mostramos el chiste en pantalla una vez ejecutada la petición HTTP
        dibujarChiste(await obtenerChiste()); 

        // Desbloqueamos el botón
        btnOtro.disabled = false;
    })

}

// En esta función añadimos el chiste a la página
// en esta función esperamos el {id, value}
const dibujarChiste = (chiste) => {

    // Creamos el elemento de la lista
    const olItem = document.createElement('li');
    olItem.innerHTML = 
    `
        <b>${chiste.id}</b>: ${chiste.value}
    `;
    
    // Le añadimos la clase de bootstrap
    olItem.classList.add('list-group-item');

    // Añadimos el elemento de la lista a la lista
    olList.append(olItem);
}

/*
Debemos crear una función que se llama cuando queremos ejecutar todo el procedimiento 
de la página
El nombre que recibe es init() y es la única función que se exporta
*/
export const init = () => {
    crearChistesHTML();
    // El evento se debe ejecutar después de crear el código
    eventos();
}