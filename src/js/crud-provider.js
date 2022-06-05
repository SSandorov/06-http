// Este servicio es muy parecido al http-provider

/*
Definición de CRUD

- Create
- Read
- Update
- Delete

Son las peticiones básicas que se hacen para poder interactuar con una base de datos, 
llamar un servicio, ...
*/

// al igual que el http-provider en primer lugar tenemos la url

// En este caso empleamos la URL genérica, para después añadir las extensiones que 
// necesitemos

const urlCRUD = 'https://reqres.in/api/users';

// Creamos la función que nos leerá el usuario
const getUsuario = async(id) => {

    // especificamos la ruta del dominio que necesitamos
    // en este caso es la petición GET -- SINGLE USER
    const resp = await fetch(`${urlCRUD}/${id}`);

    // añadimos una variable con el body de la petición y la retornamos
    const {data} = await resp.json();
    return data;
}

// Creamos la función con la que crearemos el usuario
const crearUsuario = async(usuario) => {

    // especificamos la ruta del dominio que necesitamos
    // en este caso es la petición POST -- CREATE
    const resp = await fetch(urlCRUD, {
        // Este objeto nos va a permitir configurar la petición POST
        method: 'POST',
        // el body es la data que yo quiero pedir
        // debe ser un string, por lo que debemos convertir el JSON en string
        body: JSON.stringify(usuario),
        // los headers son data adicional sobre la petición que puede que el 
        // back-end nos pida
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // Comprobamos la respuesta
    // console.log(await resp.json());
    return await resp.json();

}

// Creamos la función que nos actualizará el usuario
const actualizarUsuario = async(id, usuario) => {

    // especificamos la ruta del dominio que necesitamos
    // en este caso es la petición PUT -- UPDATE
    const resp = await fetch(`${urlCRUD}/${id}`, {
        // Este objeto nos va a permitir configurar la petición PUT
        method: 'PUT',
        // el body es la data que yo quiero pedir
        // debe ser un string, por lo que debemos convertir el JSON en string
        body: JSON.stringify(usuario),
        // los headers son data adicional sobre la petición que puede que el 
        // back-end nos pida
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // Comprobamos la respuesta
    // console.log(await resp.json());
    return await resp.json();

}

// Creamos la función que nos borrará un usuario
const borrarUsuario = async(id) => {

    // especificamos la ruta del dominio que necesitamos
    // en este caso es la petición DELETE -- DELETE
    const resp = await fetch(`${urlCRUD}/${id}`, {
        // Este objeto nos va a permitir configurar la petición PUT
        method: 'DELETE',
        /*
        Hoy en día no se elimina directamente, sino que se manda una petición al
        backend, y es este el que bloquea, borra o inhabilita el elemento en cuestión
        */
    });

    // Creamos un operador ternario para especificar si se borró o no
    return (resp.ok) ? 'Borrado': 'No se pudo eliminar';

}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}