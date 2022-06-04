/*
En este archivo centralizamos la lógica para hacer las peticiones http

En esta aplicación vamos a presionar un botón que nos devolverá chistes de Chuck Norris.
Por lo que podremos necesitar la misma URL con determinadas variaciones. Y para no
estar repitiendo el mismo código, es importante separarlo del index.js
*/

// Variable que guarda la url del joke API
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// Variable que guarda la URL de reqres API para testear la creación de usuarios
const usuariosUrl = 'https://reqres.in/api/users?page=2';

// El fetch es un método nativo de JS con la que hacemos las peticiones HTTP
// Necesita de un input (URL), y nos devuelve una promesa que resuelve una respuesta
// fetch(jokeUrl).then(resp => {
    // De esta manera comprobamos qué es la respuesta
    // console.log(resp);

    /*
    Al comprobar la respuesta de la petición nos encontramos con el body: ReadableStream. 
    Es aquí donde se aloja el contenido de la petición. El método .json también nos 
    devuelve una promesa, así que podemos emplear los métodos que las componen
    */
                    // podemos desestructurar los datos que nosotros queramos
    // resp.json().then(data /* ({id, value}) */ => {
        // console.log(data.id);
        // console.log(data.value);
    // });
// });

/*
Es importante conocer los distintos estados de las peticiones HTTP. Las más comunes son las
siguientes:
    - 200: todo está bien
    - 201: el resgistro se creó y todo está bien
    - 400 en general: peticiones fallidas que hemos hecho 
    - 500: problemas del lado del servidor
*/

// Pro tip: Como escribir una petición HTTP de manera más elegante, denominada
// promesa en cadena

fetch(jokeUrl)
    // al hacer esto, estoy diciendo que la promesa resp va a devolver otra promesa
    .then(resp => resp.json())
    // y evidentemente, como el resp.json() devuelve una promesa, podemos añadir 
    // la respuesta consecutivamente
    .then(({id, value}) => {
        console.log(id);
        console.log(value);
    });


// Aquí añadiremos la lógica de las peticiones HTTP

// Cuando veamos un async, sabemos que esa función devuelve una promesa
const obtenerChiste = async() => {
    /*
    Como son peticiones HTTP y dependen de una URL, debemos tener en cuenta los
    errores que nos puede ocasionar, por lo que debemos emplear el try-catch
    */

    try {

        const resp = await fetch(jokeUrl);
        // Comprobamos lo que nos devuelve la petición
        if(!resp.ok) throw 'No se pudo realizar la petición';

        // Hacemos que la respuesta nos devuelva el body de la petición HTTP
        // return await resp.json();
        // Es mejor si refactorizamos y peidmos los elementos del body que nos hacen
        // falta
        const {icon_url, id, value} = await resp.json();
        return {
            icon_url, 
            id, 
            value
        };

    } catch(err) {

        throw err;

    }

}

// Función que maneja la creación de usuarios
const obtenerUsuarios = async() => {

    const resp = await fetch(usuariosUrl);
        // Desestructuramos y sólo elegimos la data
    const {data:usuarios} = await resp.json();

    return usuarios;
}

export {
    obtenerChiste,
    obtenerUsuarios
}