let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let urlTopRatedMovies= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
let urlPopularMovies= `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
let urlTopRatedSeries= `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;
let urlPopularSeries= `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

let contenedorpelipop = document.querySelector(".contenedorpeliculaspopulares")

fetch(urlTopRatedMovies)

.then(function(response) {
    return response.json();
})

.then(function(data) {
     console.log(data)
     let miData = data.results;
     let contenido = "";
     for (let i = 0; i < 5; i++) {
         
         console.log(miData[i]);
         contenido += `  <li > <a href="./pelicula.html?id=${miData[i].id}"><img class="Fotos-seriepopular" src="./img/Legoinfinitywar.jpeg" alt="Avengers infinity war"></a>
         <h2 class="h2deindex">${miData[i].title}</h2>
         <h3 class="h3deindex">${miData[i].release_date} </h3>
         </li> ` 
     }
     
     contenedorpelipop.innerHTML = contenido;
     
     })

.catch(function(errors) {
    console.log(errors);
});




fetch(urlPopularMovies)
.then(function(response) {
    return response.json();
})
.then(function(data) {
     console.log(data)
})
.catch(function(errors) {
    console.log(errors);
});




fetch(urlTopRatedSeries)
.then(function(response) {
    return response.json();
})
.then(function(data) {
     console.log(data)
})
.catch(function(errors) {
    console.log(errors);
});





fetch(urlPopularSeries)
.then(function(response) {
    return response.json();
})
.then(function(data) {
     console.log(data)
})
.catch(function(errors) {
    console.log(errors);
});