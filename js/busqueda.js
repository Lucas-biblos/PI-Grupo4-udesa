let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let resulBusqueda = queryStringObj.get("buscar");

let url_search = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${resulBusqueda}`

fetch(url_search)
.then(function(response) {
    return response.json();
})
.then(function(data) {
     console.log(data.results);

     let mostrar = data.results;

     let ulBuscar = document.querySelector("#ulBus");

     let contenido = "";
     let i = 0;
     for (i = 0; i < mostrar.length; i++) {
            contenido += `  <li> <a href="./pelicula.html?id=${mostrar[i].id}"><img class="Fotos-seriepopular" src="https://image.tmdb.org/t/p/w342/${mostrar[i].poster_path}" alt=""></a>
         <h2 class="h2deindex" id="h222">${mostrar[i].title}</h2>
         <h3 class="h3deindex">${mostrar[i].release_date}</h3>
         </li> `
        }
     if (mostrar.length == 0) {
        contenido = `  <li> 
        <h2 class="h2deindex">No hay resultado para su búsqueda</h2>
        </li> `
     }
    ulBuscar.innerHTML = contenido;

})
.catch(function(errors) {
    console.log(errors);
});

let relacionados = document.querySelector(".h1deindex")
relacionados.innerHTML = `Resultados de búsqueda para: ${resulBusqueda}`;