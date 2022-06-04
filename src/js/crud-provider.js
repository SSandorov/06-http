// Este servicio es muy parecido al http-provider
// al igual que el http-provider en primer lugar tenemos la url

// En este caso empleamos la URL genérica, para después añadir las extensiones que 
// necesitemos

const urlCRUD = 'https://reqres.in/api/users';

// Creamos la función que nos devolverá el usuario
const getUsuario = async(id) => {

    // especificamos la ruta del dominio que necesitamos
    const resp = await fetch(`${urlCRUD}/${id}`);

    // añadimos una variable con el body de la petición y la retornamos
    const {data} = await resp.json();
    return data;
}

export {
    getUsuario
}