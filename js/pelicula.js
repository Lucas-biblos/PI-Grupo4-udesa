let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let qs = location.search;
let qsobj = new URLSearchParams(qs);
let idpelicula = qsobj.get("id")



let url = `https://api.themoviedb.org/3/movie/${idpelicula}?api_key=${apiKey}`

fetch(url)

.then(function(response) {
    return response.json();
})

.then(function(data) {

    console.log(data);

    let imagen = document.querySelector(".imgpeliculas");
    let titulo = document.querySelector(".h1depeliculas");
    let rating = document.querySelector("#rating");
    let fecha = document.querySelector("#fecha");
    let duracion = document.querySelector("#duracion");
    let sinopsis = document.querySelector("#sinopsis");
    let trailer = document.querySelector("#trailer");
    
    if (data.poster_path == null) {
        imagen.src = "./img/noImage.png"
    }
    else {
        imagen.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    }

    titulo.innerHTML += data.title;
    rating.innerHTML += data.vote_average
    fecha.innerHTML += data.release_date;
    duracion.innerHTML += data.runtime;
    sinopsis.innerHTML += data.overview;
    
    let genero = ""
        let midata = data
        let capturo = document.querySelector("#genero")

        if (midata.genres == null || midata.genres == 0) {
            genero += `<p class="h1depeliculas" id="genero"><u>Genero:</u> <a class="celulargenero" href="./detalle-generos.html">No hay generos para la pelicula</a></p>`
        }


        for (let i = 0; i < midata.genres.length; i++) {
            genero += `<p class="h1depeliculas" id="genero"><u>Genero:</u> <a class="celulargenero" href="./detalle-generos.html">${midata.genres[i].name} </a></p>`
                
        }
        capturo.innerHTML += genero;


    


    
    
    
        })

.catch(function(errors) {
    console.log(errors);
});
