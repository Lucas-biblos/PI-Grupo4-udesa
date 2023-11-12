let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resulBusqueda = queryStringObj.get("buscar");

let urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${resulBusqueda}`

fetch(urlBusqueda)
.then(function(response) {
    return response.json();
})
.then(function(data) {
     console.log(data.results);

     let mostrar = data.results;

     let ulBuscar = document.querySelector("#ulBus");

     let contenido = "";
     for (let i = 0; i < mostrar.length; i++) {
         contenido += `  <li> <a href="./pelicula.html?id=${mostrar[i].id}"><img class="Fotos-seriepopular" src="https://image.tmdb.org/t/p/w342/${mostrar[i].poster_path}" alt=""></a>
         <h2 class="h2deindex">${mostrar[i].title}</h2>
         <h3 class="h3deindex">${mostrar[i].release_date}</h3>
         </li> `
        }

    ulBuscar.innerHTML = contenido;

})
.catch(function(errors) {
    console.log(errors);
});