let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let generoPeli = queryStringObj.get("#cajasdegeneros"); 

let generoSerie = queryStringObj.get("#cajageneros2"); 

let cajitaGenero = document.querySelector(".h1deindex")

let nombre = JSON.parse(localStorage.getItem("name")) || [];

let generoCajita=  `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${generoPeli}`;

fetch(generoCajita)
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
        console.log(data);
        let content = data.content;
        let imagenes = ``;
        

        for (let i = 0; i<6; i++){

            let idPeli = content[i].id;

            let tituloPeli = content[i].title;

            let estrenoPeli = content[i].release_date;

            let posterPath = content[i].poster_path;

            let imagen = "https://image.tmdb.org/t/p/w200" + posterPath;
           
        }
    })
    .catch(function(error) {
    console.log("error: " + error);
    })

