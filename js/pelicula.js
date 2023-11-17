let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let qs = location.search;
let qsobj = new URLSearchParams(qs);
let idpelicula = qsobj.get("id")



let url = `https://api.themoviedb.org/3/movie/${idpelicula}?api_key=${apiKey}`
let botonRecomendado = `https://api.themoviedb.org/3/movie/${idpelicula}/recommendations?api_key=${apiKey}`

let peliculas_recomendacion = document.querySelector("#recomendaciones")
let btrecom = document.querySelector("#btnrecom")


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
        imagen.src = "./img/Noimage.png"
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







fetch(botonRecomend)

.then(function(response) {
    return response.json();
})

.then(function(data){
    console.log(data);
    let results = data.results;
    let div_peli_recom = document.querySelector(".pelis_recomendadas")
    let peliss = ""
    if (results.length != 0) {
        for (let i = 0; i < 4; i++) {
            let movie_id = results[i].id;
            let movie_title = results[i].title;
            let fecha = results[i].release_date;
            let posterPath = results[i].poster_path
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath
            if (posterPath != null){
            peliss += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src=${poster} alt="${movie_title}"></a>
                        <div class="titfav">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${movie_title}</h4></a>
                        </div>
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">${fecha}</p></a>
                    </div>    
                </div>
                `;}
            else{
                peliss += `
                    <div class ="portada">
                        <div class="pelicula">
                            <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src="./img/LOGO/Image_not_available.png" alt="${movie_title}"></a>
                            <div class="titfav">
                            <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${movie_title}</h4></a>
                            </div>
                            <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">${fecha}</p></a>
                        </div>    
                    </div>
                    `
            }
            }
    }
    else {
        let div_peli_recom = document.querySelector(".pelis_recomendadas");
        peliss += `<p>Esta pelicula no cuenta con recomendaciones adicionales.</p>`
    }
    div_peli_recom.innerHTML = peliss
   
})
    .catch(function(error){
    console.log(error);
})

