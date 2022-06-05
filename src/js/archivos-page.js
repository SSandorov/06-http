// Configuramos la página para subir las imágenes

const body = document.body;

let inputFile, imgFoto;

const crearInputFileHtml = () => {
    const html = 
    `
    <h1 class="mt-5">Subir Archivos</h1>
    <div style="height:1px; background-color:black;"></div>

    <label>Selecciona una fotografía:</label>
    <input type="file" accept="image/png, image/jpeg"/>
    <div style="height:1px; background-color:black;"></div>

    <img id="foto" class="img-thumbnail" src="">

    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

const eventos = () => {
    // evento que comprueba cambios en el input de archivos
    inputFile.addEventListener('change', (event) => {
        // comprobamos la respuesta del evento
        // console.log(event);
        /* 
        lo que nos interesa se encuentra dentro del target y es el file.
        El input podría recibir múltiples archivos, y se añadirían
        dentro del objeto literal FileList
        En nuestro caso sólo nos importa la posición 0, ya que sólo subimos
        un archivo
        */
        const file = event.target.files[0];
        console.log(file);
        
    });
}

export const init = () => {
    crearInputFileHtml();
    eventos();
}