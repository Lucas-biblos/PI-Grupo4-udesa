let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let qs = location.search;
let qsobj = new URLSearchParams(qs);
let idgeneropeli = qsobj.get("id")
console.log(idgeneropeli);
let titulogenero = qsobj.get("name")

let cajitaGenero = document.querySelector(".Articlegenero")

let nombre = JSON.parse(localStorage.getItem("name")) || [];

let Pelisurl =  `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${idgeneropeli}`;
let Serieurl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${idgeneropeli}`;

fetch(Pelisurl)
.then(function(response) {
return response.json()
})

.then(function(data) {
    console.log(data);
    let miData = data.results;
    let nombregenero = document.querySelector("#cajitaGeneros"); 
    nombregenero.innerHTML = titulogenero;
    let generoPeli = document.querySelector("#generoPeli")
    let contenido = "";
    for (let i = 0; i < miData.length; i++){
        contenido += `<li> <a href="./pelicula.html?${miData[i].id}"><img class="Fotos-seriepopular" src="https://image.tmdb.org/t/p/w200${miData[i].poster_path}" alt="${miData[i].title}"></a>
        <h2 class="h2deindex">${miData[i].title}</h2>
        <h3 class="h3deindex">${miData[i].release_date}</h3>
        </li>`;
           
    }
        generoPeli.innerHTML = contenido;
})
.catch(function(error) {
console.log("error: " + error);
})
