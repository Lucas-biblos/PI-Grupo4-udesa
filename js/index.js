let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let urlTopRatedMovies= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
let urlPopularMovies= `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
let urlTopRatedSeries= `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;
let urlPopularSeries= `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

let contenedorpelipop = document.querySelector("#contenedorpeliculaspopulares")

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
         contenido += `  <li > <a href="./pelicula.html?id=${miData[i].id}"><img class="Fotos-seriepopular" src="https://image.tmdb.org/t/p/w342/${miData[i].poster_path}"></a>
         <h2 class="h2deindex">${miData[i].title}</h2>
         <h3 class="h3deindex">${miData[i].release_date} </h3>
         </li> ` 
     }
     
     contenedorpelipop.innerHTML = contenido;
     
     })

.catch(function(errors) {
    console.log(errors);
});


let peliculasP = document.querySelector("#peliculasP")

fetch(urlPopularMovies)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
     let miData = data.results;
     let contenido = "";
     for (let i = 0; i < 5; i++) {
         
         console.log(miData[i]);
         contenido += `  <li > <a href="./pelicula.html?id=${miData[i].id}"><img class="Fotos-seriepopular" src="https://image.tmdb.org/t/p/w342/${miData[i].poster_path}"></a>
         <h2 class="h2deindex">${miData[i].title}</h2>
         <h3 class="h3deindex">${miData[i].release_date} </h3>
         </li> ` 
     }
     
     peliculasP.innerHTML = contenido;
     
     })

.catch(function(errors) {
    console.log(errors);
});

let seriesP = document.querySelector("#seriesP")

fetch(urlPopularSeries)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let miData = data.results;
    let contenido = "";
    for (let i = 0; i < 5; i++) {
        
        console.log(miData[i]);
        contenido += `  <li > <a href="./Series.html?id=${miData[i].id}"><img class="Fotos-seriepopular" src="https://image.tmdb.org/t/p/w342/${miData[i].poster_path}"></a>
        <h2 class="h2deindex">${miData[i].name}</h2>
        <h3 class="h3deindex">${miData[i].first_air_date} </h3>
        </li> ` 
    }
    
    seriesP.innerHTML = contenido;
    
    })

.catch(function(errors) {
   console.log(errors);
});
