let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let qs = location.search;
let qsobj = new URLSearchParams(qs);
let idpelicula = qsobj.get("id")


let url = `https://api.themoviedb.org/3/movie/${idpelicula}?api_key=${apiKey}`
let botonRecomendado = `https://api.themoviedb.org/3/movie/${idpelicula}/recommendations?api_key=${apiKey}`
let urlyoutube = `https://www.youtube.com/${idpelicula}?api_key=${apiKey}`

let pelirecom = document.querySelector("#divrecom")
let btrecom = document.querySelector("#recomendaciones")

btrecom.addEventListener ("click", function() {
    if(pelirecom.style.display == "none"){
        pelirecom.style.display = 'flex';
    }  
    else{
        pelirecom.style.display = "none";
    }
})


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







fetch(botonRecomendado)

.then(function(response) {
    return response.json();
})

.then(function(data){
    console.log(data);
    let results = data.results;
    let recomdiv = document.querySelector(".pelisrecom")
    let peliss = ""
    if (results.length != 0) {
        for (let i = 0; i < 4; i++) {
            let posterPath = results[i].poster_path
            if (posterPath != null){
            peliss += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./pelicula.html?id=${results[i].id}" ><img   src="https://image.tmdb.org/t/p/w200${results[i].poster_path}" alt="${results[i].title}"></a>
                        <div >
                        <a href="./pelicula.html?id=${results[i].id}" ><h4 id="${results[i].id}" >${results[i].title}</h4></a>
                        </div>
                        <a href="./pelicula.html?id=${results[i].id}" ><p >${results[i].release_date}</p></a>
                    </div>    
                </div>
                `;}
            else{
                peliss += `
                    <div class ="portada">
                        <div class="pelicula">
                            <a href="./pelicula.html?id=${results[i].id}" ><img src="./img/LOGO/Image_not_available.png" alt="${results[i].title}"></a>
                            <div >
                            <a href="./pelicula.html?id=${results[i].id}" ><h4 id="${results[i].id}" >${results[i].title}</h4></a>
                            </div>
                            <a href="./pelicula.html?id=${results[i].id}" ><p>${results[i].release_date}</p></a>
                        </div>    
                    </div>
                    `
            }
            }
    }
    else {
        let recomdiv = document.querySelector(".pelis_recomendadas");
        peliss += `<p>Esta pelicula no cuenta con recomendaciones adicionales.</p>`
    }
    recomdiv.innerHTML = peliss
   
})
    .catch(function(error){
    console.log(error);
})




fetch(urlyoutube)

.then(function(response) {
    return response.json();
})

.then(function(data) {

    console.log(data);

    let trailer = document.querySelector("#linkyt");
    
    let midata = data;

    trailer.innerHTML += `https://www.youtube.com/${idpelicula}?api_key=${apiKey}`
  
        })
    


.catch(function(errors) {
    console.log(errors);
});