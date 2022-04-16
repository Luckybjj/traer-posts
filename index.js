

// Realizar un request (consulta) a la API usando async-await
// Función asíncrona
const getPosts = async () => {

    // Se almacena la URL en una constante
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // Bloque try/catch para conectarse a la URL y controlar errores
    try {
        const res = await fetch(url);
        // Se almacena el arreglo de datos recibidos de la consulta en una constante
        const data = await res.json();
        console.log(data);
        // Se manipula el DOM a traves de id
        const lista = document.getElementById("post-data")

        // Se recorre el arreglo con el metodo forEach y se insertan los datos en la lista mediante innerHTML
        data.forEach((element)=>{
            lista.innerHTML += `<ul>
                                    <li><b>${element.title}</b></p>
                                    <p>${element.body}</p>
                                    </ br>
                              </ul>`;
        });

    } 
    // Método catch() para atrapar errores
    catch(err) {
        console.log(err);
    }
    
}
