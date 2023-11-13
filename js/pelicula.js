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

     let miData = data.results;

     let section = document.querySelector("#sectiondetalle");

     let contenido = `<h1 class="h1depeliculas"><u></u></h1>
        <p class="h1depeliculas"> <u>Calificacion:</u></p>
        <p class="h1depeliculas"><u>Fecha de estreno:</u> 26 de abril de 2018</p>
        <p class="h1depeliculas"><u>Duracion:</u> 2h 29m</p>
        <p class="h1depeliculas"><u>Sinopsis:</u> El poderoso Thanos, decidido a hacerse con las Gemas del Infinito para controlar el universo, ataca la nave en la que huyen los supervivientes de Asgard. Su intención es hacerse con la segunda de las gemas, ahora en manos de Loki.</p>
        <p class="h1depeliculas"><u>Genero:</u> <a class="celulargenero" href="./detalle-generos.html">Accion </a> y <a class="celulargenero" href="./detalle-generos.html">Ciencia Ficcion</a></p>
        <p class="h1depeliculas"><u>Trailer:</u></p>
        <iframe class="iframecelular" width="860" height="430" src="https://www.youtube.com/embed/6ZfuNTqbHE8?si=Zdw4qD3hCYP0oEoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
        <article class="btn">
            <button class="botonpeliculas"> ⭐Favoritos</button>
    
        </article>`;
    
     section.innerHTML = contenido

     })

.catch(function(errors) {
    console.log(errors);
});
