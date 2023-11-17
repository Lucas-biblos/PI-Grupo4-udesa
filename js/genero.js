let apiKey = "b7755d0a973ff1c1d329431ff2d89d36";

let urlgeneropeli = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
let urlgeneroserie = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`

function genero() {
    let caja = document.querySelector(".boxgeneros");
    for (let i = 0; i < caja.length; i++) {
        caja[i].addEventListener("click", function() {
          let nombre = caja[i].id;
          localStorage.setItem("name", JSON.stringify(nombre));
        });
      }
}

fetch(urlgeneropeli)

.then(function(response) {
  return response.json()
})

.then(function(data) {
    let genero = data.genres
    console.log(data);
    let cajas = ''
    let articlepeli = document.querySelector("#cajasdegeneros")
   
    for(let i=0; i < genero.length; i++){
        cajas += `<a class= "boxgeneros" href="./detalle-generos.html?id=${genero[i].id}&name=${genero[i].name}">${genero[i].name}</a>`
    }
    articlepeli.innerHTML = cajas
    
})
.catch(function(error) {
  console.log("Error: " + error);
})

function genero() {
    let caja = document.querySelector(".boxgenerosseries");
    for (let i = 0; i < caja.length; i++) {
        caja[i].addEventListener("click", function() {
          let nombre = caja[i].id;
          localStorage.setItem("name", JSON.stringify(nombre));
        });
      }
}




fetch(urlgeneroserie)

.then(function(response) {
  return response.json()
})

.then(function(data) {
    let genero2 = data.genres
    console.log(data);
    let cajas2 = ''
    let articleserie = document.querySelector("#cajageneros2")
   
    for(let i=0; i < genero2.length; i++){
        cajas2 += `<a class= "boxgeneros" href="./detalle-generos.htmlid=${genero2[i].id}"">${genero2[i].name}</a>`
    }
    articleserie.innerHTML = cajas2
    
})
.catch(function(error) {
  console.log("Error: " + error);
})