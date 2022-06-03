// Variable que guarda la url del joke API
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// El fetch es un método nativo de JS con la que hacemos las peticiones HTTP
// Necesita de un input (URL), y nos devuelve una promesa que resuelve una respuesta
fetch(jokeUrl).then(resp => {
    // De esta manera comprobamos qué es la respuesta
    // console.log(resp);

    /*
    Al comprobar la respuesta de la petición nos encontramos con el body: ReadableStream. 
    Es aquí donde se aloja el contenido de la petición. El método .json también nos 
    devuelve una promesa, así que podemos emplear los métodos que las componen
    */
                    // podemos desestructurar los datos que nosotros queramos
    resp.json().then(data /* ({id, value}) */ => {
        console.log(data.id);
        console.log(data.value);
    });
});

/*
Es importante conocer los distintos estados de las peticiones HTTP. Las más comunes son las
siguientes:
    - 200: todo está bien
    - 201: el resgistro se creó y todo está bien
    - 400 en general: peticiones fallidas que hemos hecho 
    - 500: problemas del lado del servidor
*/