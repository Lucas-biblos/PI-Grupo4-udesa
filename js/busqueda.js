let apiKey = "e085a8d4a0502afc1d3c8e65c53af130";

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resulBusqueda = queryStringObj.get("buscar");

urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${queryStringObj}`

let urlPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
let urlValoradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
let urlGeneros = `https://api.themoviedb.org/3/movie/list?api_key=${apiKey}`




fetch(urlBusqueda)
.then(function(response) {
    return response.json();
})
.then(function(data) {
     console.log(data)
})
.catch(function(errors) {
    console.log(errors);
});