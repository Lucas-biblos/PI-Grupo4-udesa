let recuperoStorage = localStorage.getItem('favoritos');

let favoritos = JSON.parse(recuperoStorage)

let section = document.querySelector('#lista');

let personajesFavoritos = '';

 
if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay favoritos seleccionados</p>'
} else {
    
    for (let i = 0; i < favoritos.length; i++) {

        let url = `https://rickandmortyapi.com/api/character/${favoritos[i]}`;

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            personajesFavoritos += `<article>
                                        <img src=${data.image} alt='' />
                                        <p>Name: ${data.name}</p>
                                        <p>Status: ${data.status} </p>
                                        <a href='detalle.html?id=${data.id}'>Ver más</a>
                                    </article>`;

            section.innerHTML = personajesFavoritos;
            
        })
        .catch(function(error) {
            console.log(error);
        });
        
    }
}